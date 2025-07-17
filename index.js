import fs from "fs";
import http from "http";
import https from "https";

const downloadImage = (url, filename) => {
  let client = http;
  if (url.toString().indexOf("https") === 0) {
    client = https;
  }
  return new Promise((resolve, reject) => {
    client.get(url, (res) => {
      res
        .pipe(fs.createWriteStream(filename))
        .on("error", reject)
        .once("close", () => resolve(filename));
    });
  });
};

(async () => {
  for (let cpt = 1; cpt < 5; cpt++) {
    try {
      await downloadImage(
        `https://anime-sama.fr/s2/scans/Kaoru%20Hana%20wa%20Rin%20to%20Saku/2/${cpt}.jpg`,
        `img${cpt}.jpg`
      );
    } catch (error) {
      console.log("@@@@@@ju@@[index.js.28]", "error", error);
    }
  }
})();
