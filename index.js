import fs from "fs";
import fsp from "fs/promises";
import http from "http";
import https from "https";
import PDFDocument from "pdfkit";

const TEMP_DIR_ROOT = "./tmp";
const PDF_DIR_ROOT = "./pdf";
const SCANS_URL = "https://anime-sama.fr/s2/scans";

// const mangaTitle = "Kaoru Hana wa Rin to Saku";
// const startChapter = 1;
// const endChapter = 5;

const mangaTitle = "Fullmetal Alchemist";
const startChapter = 1;
const endChapter = 5;

const downloadImage = (url, filename) => {
  let client = http;
  if (url.toString().indexOf("https") === 0) {
    client = https;
  }
  return new Promise((resolve, reject) => {
    const req = client.get(url, (res) => {
      if (res.statusCode > 300) {
        return reject(new Error(res.statusCode));
      }
      return res
        .pipe(fs.createWriteStream(filename))
        .on("error", reject)
        .once("close", () => resolve(filename));
    });
    // .on("error", (err) => {
    //   console.log("@@@@@@ju@@@@@index.js/27", "client error", err);
    //   // Check if retry is needed
    //   if (req.reusedSocket && err.code === "ECONNRESET") {
    //     return downloadImage(url, filename);
    //   }
    // });
  });
};

const writePdf = async (mangaTitle, chapterTitle, imagePaths) => {
  console.log(">>>", "PDF Writing chapter", chapterTitle);
  const doc = new PDFDocument({ size: "A4" });
  const PAGE_WIDTH = 595;
  const PAGE_HEIGHT = 841;

  const mangaDir = `${PDF_DIR_ROOT}/${mangaTitle}`;
  if (!fs.existsSync(mangaDir)) {
    await fsp.mkdir(mangaDir);
  }

  doc.pipe(fs.createWriteStream(`${mangaDir}/${chapterTitle}.pdf`));

  const firstImage = imagePaths.shift();
  doc
    .image(firstImage, 0, 0, {
      fit: [PAGE_WIDTH, PAGE_HEIGHT],
      align: "center",
      valign: "center",
    })
    .fontSize(16)
    .fillColor("white")
    .text(chapterTitle, 3, 3)
    .fillColor("black")
    .text(chapterTitle, 2, 2);

  imagePaths.forEach((imagePath) => {
    console.log(">>>", "PDF Writing image", imagePath);

    doc.addPage().image(imagePath, 0, 0, {
      fit: [PAGE_WIDTH, PAGE_HEIGHT],
      align: "center",
      valign: "center",
    });
  });

  doc.end();
};

(async () => {
  try {
    if (fs.existsSync(TEMP_DIR_ROOT)) {
      await fsp.rm(TEMP_DIR_ROOT, { recursive: true });
    }
    await fsp.mkdir(TEMP_DIR_ROOT);

    if (fs.existsSync(PDF_DIR_ROOT)) {
      await fsp.rm(PDF_DIR_ROOT, { recursive: true });
    }
    await fsp.mkdir(PDF_DIR_ROOT);

    let allImagePaths = [];
    let chapterCpt = startChapter;
    while (true) {
      allImagePaths = [];
      let imgCpt = 1;
      try {
        while (true) {
          const url = `${SCANS_URL}/${encodeURI(mangaTitle)}/${chapterCpt}/${imgCpt}.jpg`;
          const outFileName = `${TEMP_DIR_ROOT}/img-${chapterCpt}-${imgCpt}.jpg`;
          await downloadImage(url, outFileName);

          allImagePaths.push(outFileName);
          console.log(">>>", "Got", outFileName);
          imgCpt++;
        }
      } catch (err) {
        console.log(">>>", "End of chapter", chapterCpt);
      }

      if (allImagePaths.length === 0) {
        break;
      }

      await writePdf(
        mangaTitle,
        `${mangaTitle} - Chapitre ${chapterCpt}`,
        allImagePaths
      );
      chapterCpt++;

      if (chapterCpt > endChapter) {
        break;
      }
    }
  } catch (error) {
    console.log("!!!", error);
  }

  try {
    if (fs.existsSync(TEMP_DIR_ROOT)) {
      await fsp.rm(TEMP_DIR_ROOT, { recursive: true });
    }
  } catch (error) {
    console.log("!!!", error);
  }
})();
