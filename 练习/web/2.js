const { combineOriginalAndKana } = require("@tmilar/furigana-helper")

const combined = combineOriginalAndKana("送り仮名", "おくりがな")
// =>  [
//       ["送", "おく"],
//       ["り", "り"],
//       ["仮名", "がな"],
//     ]


console.log(combined)