// Etape1

function getLatinCharacterList(str) {
  console.log(str.split(""));
}

getLatinCharacterList("Hello world");

// Etape2
const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

const morseToLatin = {
  "-": "T",
  "--": "M",
  "---": "O",
  "--.": "G",
  "--.-": "Q",
  "--..": "Z",
  "-.": "N",
  "-.-": "K",
  "-.--": "Y",
  "-.-.": "C",
  "-..": "D",
  "-..-": "X",
  "-...": "B",
  ".": "E",
  ".-": "A",
  ".--": "W",
  ".---": "J",
  ".--.": "P",
  ".-.": "R",
  ".-..": "L",
  "..": "I",
  "..-": "U",
  "..-.": "F",
  "...": "S",
  "...-": "V",
  "....": "H",
};

function translateLatinCharacter(char) {
  const upperChar = char.toUpperCase();
  console.log(latinToMorse[upperChar]);
}

translateLatinCharacter("A");

// Etape3

// function encode(str) {
//   console.log("str");
//   getLatinCharacterList();
//   translateLatinCharacter();
// }

// encode("hello");

// etape 4

function getMorseCharacterList(str) {
  console.log(str.split(""));
}

getMorseCharacterList(".---");

function translateMorseCharacter(char) {
  const upperChar = char.toUpperCase();
  console.log(morseToLatin[upperChar]);
}

translateMorseCharacter("..-");
