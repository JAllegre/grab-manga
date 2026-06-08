/* eslint-disable no-irregular-whitespace */
const mangas = [
  {
    title: "Solo Leveling",
    tomes: [
      { startChapter: 0, endChapter: 12 },
      { startChapter: 13, endChapter: 26 },
      { startChapter: 27, endChapter: 44 },
      { startChapter: 45, endChapter: 63 },
      { startChapter: 64, endChapter: 81 },
      { startChapter: 82, endChapter: 97 },
      { startChapter: 98, endChapter: 110 },
      { startChapter: 111, endChapter: 122 },
      { startChapter: 123, endChapter: 134 },
      { startChapter: 135, endChapter: 146 },
      { startChapter: 147, endChapter: 158 },
      { startChapter: 159, endChapter: 168 },
      { startChapter: 169, endChapter: 179 },
      { startChapter: 180, endChapter: 190 },
      { startChapter: 191, endChapter: 200 },
    ],
  },
  {
    title: "Hunter x Hunter",
    tomes: [
      { startChapter: 1, endChapter: 8 }, // Tome 1
      { startChapter: 9, endChapter: 17 }, // Tome 2
      { startChapter: 18, endChapter: 26 }, // Tome 3
      { startChapter: 27, endChapter: 36 }, // Tome 4
      { startChapter: 37, endChapter: 45 }, // Tome 5
      { startChapter: 46, endChapter: 55 }, // Tome 6
      { startChapter: 56, endChapter: 64 }, // Tome 7
      // { startChapter: 65, endChapter: 73 }, // Tome 8
      { startChapter: 74, endChapter: 82 }, // Tome 9
      { startChapter: 83, endChapter: 91 }, // Tome 10
      { startChapter: 92, endChapter: 100 }, // Tome 11
      { startChapter: 101, endChapter: 110 }, // Tome 12
      { startChapter: 111, endChapter: 119 }, // Tome 13
      { startChapter: 120, endChapter: 129 }, // Tome 14
      { startChapter: 130, endChapter: 138 }, // Tome 15
      { startChapter: 139, endChapter: 147 }, // Tome 16
      { startChapter: 148, endChapter: 157 }, // Tome 17
      { startChapter: 158, endChapter: 167 }, // Tome 18
      { startChapter: 168, endChapter: 177 }, // Tome 19
      { startChapter: 178, endChapter: 187 }, // Tome 20
      { startChapter: 188, endChapter: 197 }, // Tome 21
      { startChapter: 198, endChapter: 207 }, // Tome 22
      { startChapter: 208, endChapter: 217 }, // Tome 23
      { startChapter: 218, endChapter: 227 }, // Tome 24
      { startChapter: 228, endChapter: 237 }, // Tome 25
      { startChapter: 238, endChapter: 247 }, // Tome 26
      { startChapter: 248, endChapter: 257 }, // Tome 27
      { startChapter: 258, endChapter: 267 }, // Tome 28
      { startChapter: 268, endChapter: 277 }, // Tome 29
      { startChapter: 278, endChapter: 287 }, // Tome 30
      { startChapter: 288, endChapter: 297 }, // Tome 31
      { startChapter: 298, endChapter: 307 }, // Tome 32
      { startChapter: 308, endChapter: 317 }, // Tome 33
      { startChapter: 318, endChapter: 327 }, // Tome 34
      { startChapter: 328, endChapter: 337 }, // Tome 35
      { startChapter: 338, endChapter: 347 }, // Tome 36
      { startChapter: 348, endChapter: 357 }, // Tome 37
      { startChapter: 358, endChapter: 400 }, // Tome 38 (dernier connu)
    ],
  },
  {
    title: "Frieren",
    tomes: [
      { startChapter: 1, endChapter: 7 }, // Tome 1
      { startChapter: 8, endChapter: 17 }, // Tome 2
      { startChapter: 18, endChapter: 27 }, // Tome 3
      { startChapter: 28, endChapter: 37 }, // Tome 4
      { startChapter: 38, endChapter: 47 }, // Tome 5
      { startChapter: 48, endChapter: 57 }, // Tome 6
      { startChapter: 58, endChapter: 67 }, // Tome 7
      { startChapter: 68, endChapter: 77 }, // Tome 8
      { startChapter: 78, endChapter: 87 }, // Tome 9
      { startChapter: 88, endChapter: 97 }, // Tome 10
      { startChapter: 98, endChapter: 107 }, // Tome 11
      { startChapter: 108, endChapter: 117 }, // Tome 12
      { startChapter: 118, endChapter: 127 }, // Tome 13
      { startChapter: 128, endChapter: 137 }, // Tome 14
    ],
  },

  {
    title: "My Hero Academia",
    tomes: [
      { startChapter: 1, endChapter: 7 }, // Tome 1
      { startChapter: 8, endChapter: 17 }, // Tome 2
      { startChapter: 18, endChapter: 26 }, // Tome 3
      { startChapter: 27, endChapter: 35 }, // Tome 4
      { startChapter: 36, endChapter: 44 }, // Tome 5
      { startChapter: 45, endChapter: 53 }, // Tome 6
      { startChapter: 54, endChapter: 62 }, // Tome 7
      { startChapter: 63, endChapter: 71 }, // Tome 8
      { startChapter: 72, endChapter: 80 }, // Tome 9
      { startChapter: 81, endChapter: 89 }, // Tome 10
      // { startChapter: 90, endChapter: 99 },  // Tome 11
      // { startChapter: 100, endChapter: 108 },// Tome 12
      // { startChapter: 109, endChapter: 118 },// Tome 13
      // { startChapter: 119, endChapter: 128 },// Tome 14
      // { startChapter: 129, endChapter: 137 },// Tome 15
      // { startChapter: 138, endChapter: 147 },// Tome 16
      // { startChapter: 148, endChapter: 157 },// Tome 17
      // { startChapter: 158, endChapter: 167 },// Tome 18
      // { startChapter: 168, endChapter: 177 },// Tome 19
      // { startChapter: 178, endChapter: 188 },// Tome 20
      // { startChapter: 189, endChapter: 200 },// Tome 21
      // { startChapter: 201, endChapter: 212 },// Tome 22
      // { startChapter: 213, endChapter: 224 },// Tome 23
      // { startChapter: 225, endChapter: 235 },// Tome 24
      // { startChapter: 236, endChapter: 246 },// Tome 25
      // { startChapter: 247, endChapter: 258 },// Tome 26
      // { startChapter: 259, endChapter: 267 },// Tome 27
      // { startChapter: 268, endChapter: 276 },// Tome 28
      // { startChapter: 277, endChapter: 285 },// Tome 29
      // { startChapter: 286, endChapter: 295 },// Tome 30
      // { startChapter: 296, endChapter: 306 },// Tome 31
      // { startChapter: 307, endChapter: 318 },// Tome 32
      // { startChapter: 319, endChapter: 328 },// Tome 33
      // { startChapter: 329, endChapter: 339 },// Tome 34
      // { startChapter: 340, endChapter: 350 },// Tome 35
      // { startChapter: 351, endChapter: 362 },// Tome 36
      // { startChapter: 363, endChapter: 374 },// Tome 37
      // { startChapter: 375, endChapter: 386 },// Tome 38
      // { startChapter: 387, endChapter: 398 },// Tome 39
      // { startChapter: 399, endChapter: 410 },// Tome 40
      // { startChapter: 411, endChapter: 422 },// Tome 41
      // { startChapter: 423, endChapter: 431 },// Tome 42
    ],
  },
  {
    title: "Kaoru Hana wa Rin to Saku",
    tomes: [
      { startChapter: 1, endChapter: 5 }, // Tome 1
      { startChapter: 6, endChapter: 13 }, // Tome 2
      { startChapter: 14, endChapter: 21 }, // Tome 3
      { startChapter: 22, endChapter: 29 }, // Tome 4
      { startChapter: 30, endChapter: 37 }, // Tome 5
      { startChapter: 38, endChapter: 45 }, // Tome 6
      { startChapter: 46, endChapter: 53 }, // Tome 7
      { startChapter: 54, endChapter: 61 }, // Tome 8
      { startChapter: 62, endChapter: 69 }, // Tome 9
      { startChapter: 70, endChapter: 77 }, // Tome 10
      { startChapter: 78, endChapter: 85 }, // Tome 11
      { startChapter: 86, endChapter: 93 }, // Tome 12
      { startChapter: 94, endChapter: 100 }, // Tome 13
      { startChapter: 101, endChapter: 109 }, // Tome 14
      { startChapter: 110, endChapter: 117 }, // Tome 15
      { startChapter: 118, endChapter: 125 }, // Tome 16
      { startChapter: 126, endChapter: 133 }, // Tome 17
    ],
  },
  {
    title: "L'Atelier des Sorciers",
    tomes: [
      { startChapter: 1, endChapter: 5 }, // Tome 1
      { startChapter: 6, endChapter: 11 }, // Tome 2
      { startChapter: 12, endChapter: 17 }, // Tome 3
      { startChapter: 18, endChapter: 23 }, // Tome 4 (inclut chap 23.5 hors série)
      { startChapter: 24, endChapter: 29 }, // Tome 5
      { startChapter: 30, endChapter: 35 }, // Tome 6
      { startChapter: 36, endChapter: 40 }, // Tome 7
      { startChapter: 41, endChapter: 45 }, // Tome 8
      { startChapter: 46, endChapter: 51 }, // Tome 9
      { startChapter: 52, endChapter: 57 }, // Tome 10
      { startChapter: 58, endChapter: 63 }, // Tome 11 ATTENTION : 62.5 est un chapitre hors séri donc ça décalle la suite site anime-sama
      //{ startChapter: 63, endChapter: 68 }, // Tome 12
      //{ startChapter: 69, endChapter: 75 }, // Tome 13
      //{ startChapter: 76, endChapter: 83 }, // Tome 14 (sortie japonaise 23 avril 2025)
    ],
  },
  {
    title: "The Promised Neverland",
    tomes: [
      {
        startChapter: 1,
        endChapter: 7,
      },
      {
        startChapter: 8,
        endChapter: 16,
      },
      {
        startChapter: 17,
        endChapter: 25,
      },
      {
        startChapter: 26,
        endChapter: 34,
      },
      {
        startChapter: 35,
        endChapter: 43,
      },
      {
        startChapter: 44,
        endChapter: 52,
      },
      {
        startChapter: 53,
        endChapter: 61,
      },
      {
        startChapter: 62,
        endChapter: 70,
      },
      {
        startChapter: 71,
        endChapter: 79,
      },
      {
        startChapter: 80,
        endChapter: 88,
      },
    ],
  },
];

export default mangas;
