import fsp from "fs/promises";
import fs from "fs";
import http from "http";
import https from "https";
import PDFDocument from "pdfkit";
const doc = new PDFDocument();

const downloadImage = (url, filename) => {
  let client = http;
  if (url.toString().indexOf("https") === 0) {
    client = https;
  }
  return new Promise((resolve, reject) => {
    client.get(url, (res) => {
      if (res.statusCode > 300) {
        return reject(new Error(res.statusCode));
      }
      return res
        .pipe(fs.createWriteStream(filename))
        .on("error", reject)
        .once("close", () => resolve(filename));
    });
  });
};

(async () => {
  try {
    const DEST_DIR_ROOT = "./data";

    if (fs.existsSync(DEST_DIR_ROOT)) {
      await fsp.rm(DEST_DIR_ROOT, { recursive: true });
    }
    await fsp.mkdir(DEST_DIR_ROOT);

    try {
      for (let chapterCpt = 1; chapterCpt < 4; chapterCpt++) {
        try {
          for (let imgCpt = 1; imgCpt < 4; imgCpt++) {
            const url = `https://anime-sama.fr/s2/scans/Kaoru%20Hana%20wa%20Rin%20to%20Saku/${chapterCpt}/${imgCpt}.jpg`;
            const outFileName = `${DEST_DIR_ROOT}/img${chapterCpt}-${imgCpt}.jpg`;
            await downloadImage(url, outFileName);

            console.log("@@@@@@ju@@[index.js.44]", "Got", outFileName);
          }
        } catch (err) {
          console.log("@@@@@@ju@@[index.js.28]", "Jump to next Chapter");
        }
      }
    } catch (err2) {
      console.log("@@@@@@ju@@[index.js.28]", "Download complete");
    }

    doc.pipe(fs.createWriteStream("output.pdf"));

    // Embed a font, set the font size, and render some text
    doc
      //.font("fonts/PalatinoBold.ttf")
      .fontSize(25)
      .text("Some text with an embedded font!", 100, 100);
    doc.addPage().image("data/img1-1.jpg", {
      fit: [250, 300],
      align: "center",
      valign: "center",
    });

    // Add another page
    doc.addPage().image("data/img1-2.jpg", {
      fit: [250, 300],
      align: "center",
      valign: "center",
    });

    doc.end();
  } catch (error) {
    console.log("@@@@@@ju@@[index.js.43]", error);
  }
})();
