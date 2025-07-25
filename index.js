/*
 MODE D'EMPLOI

 - Aller sur https://anime-sama.fr/
 - Rechercher le titre souhaiter
 - Aller dans scans et voire jusqu'à quel chapitre on peut grab et si il y a un décallage de tome (x.5) pour adapter le résultat suivant

 - Utiliser le prompt suivant pour générer le tableau de tomes nécéssaires (manga.js)en mettant le bon titre

      Crée moi un objet javascript le manga "My Hero Academia" avec en première propriété le titre ("title": string) et en deuxième propriété un tableau des tomes ("tomes":array of object). Un tome étant  un objet avec le premier chapitre officiel ( "startChapter": number) et le dernier chapitre officiel ("endChapter":number).
      Voilà à quoi cela doit ressembler:
      {
          title: "Le Titre",
          tomes: [
            {
              startChapter: 1,
              endChapter: 8,
            },
          ]
      }
     Il faut renseigner les vrais chapitres de chaque tome officiel de ce manga


     - Vérifier jusqu'à quel tome/chapitre c'est disponible sur le site et adapter l'objet généré

     - Ajouter l'objet js généré par chatGPT en début de tableau (le script ne prend que le premier, les autres sont gardé pour une potentiel future utilisation)

     - npm start
*/
import fs from "fs";
import fsp from "fs/promises";
import http from "http";
import https from "https";
import PDFDocument from "pdfkit";
import mangas from "./mangas.js";

const TEMP_DIR_ROOT = "./tmp";
const PDF_DIR_ROOT = "./pdf";
const SCANS_URL = "https://anime-sama.fr/s2/scans";

const downloadImage = (url, filename) => {
  console.log(">>>", "Downloading image", url, " / ", filename);

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

const writePdf = async (mangaTitle, tomeTitle, imagePaths) => {
  console.log(">>>", "PDF Writing chapter", mangaTitle, " / ", tomeTitle, " / ", imagePaths.length);
  const doc = new PDFDocument({ size: "A4" });
  const PAGE_WIDTH = 595;
  const PAGE_HEIGHT = 841;

  const mangaDir = `${PDF_DIR_ROOT}/${mangaTitle}`;
  if (!fs.existsSync(mangaDir)) {
    await fsp.mkdir(mangaDir);
  }

  doc.pipe(fs.createWriteStream(`${mangaDir}/${tomeTitle}.pdf`));

  const firstImage = imagePaths.shift();
  doc
    .image(firstImage, 0, 0, {
      fit: [PAGE_WIDTH, PAGE_HEIGHT],
      align: "center",
      valign: "center",
    })
    .fontSize(16)
    .fillColor("white")
    .text(tomeTitle, 3, 3)
    .fillColor("black")
    .text(tomeTitle, 2, 2);

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
    const mangaData = mangas[0];

    if (fs.existsSync(TEMP_DIR_ROOT)) {
      await fsp.rm(TEMP_DIR_ROOT, { recursive: true });
    }
    await fsp.mkdir(TEMP_DIR_ROOT);

    if (fs.existsSync(PDF_DIR_ROOT)) {
      await fsp.rm(PDF_DIR_ROOT, { recursive: true });
    }
    await fsp.mkdir(PDF_DIR_ROOT);

    const mangaTitle = mangaData.title;

    for (let tomeCpt = 0; tomeCpt < mangaData.tomes.length; tomeCpt++) {
      const tome = mangaData.tomes[tomeCpt];
      let tomeImages = [];
      for (let chapterCpt = tome.startChapter; chapterCpt <= tome.endChapter; chapterCpt++) {
        let imgCpt = 1;

        try {
          while (true) {
            const imageUrl = `${SCANS_URL}/${encodeURI(mangaTitle)}/${chapterCpt}/${imgCpt}.jpg`;
            const imageFileName = `${TEMP_DIR_ROOT}/img-t${tomeCpt}-c${chapterCpt}-i${imgCpt}.jpg`;

            await downloadImage(imageUrl, imageFileName);

            tomeImages.push(imageFileName);
            imgCpt++;
          }
        } catch (err) {
          // End of chapter
        }
      }

      if (tomeImages.length <= 0) {
        console.log("!!!", "ERROR - No image downloaded");
        break;
      }

      await writePdf(mangaTitle, `${mangaTitle} - Tome ${String(tomeCpt + 1).padStart(2, "0")}`, tomeImages);
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
