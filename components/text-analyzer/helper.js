export const countCharacters = (text) => text.length;

export const countWords = (text) => {
  if (text.length == 0) return 0;
  else return text.split(/\s+/).length;
};

export const countParagraphs = (text) => {
  if (text.length == 0) return 0;
  else return text.split(/\r\n+|\r+|\n+/).length;
};

export const countSentences = (text) => {
  if (text.length == 0) return 0;
  else
    return text.replace(/ *\([^)]*\) */g, '').split(/[?!.]+\s?\w|\n+/).length; // starting line OR not finish sentence or space + finish sentece .?! + 1 character starting the new sentence
};

export const countVowels = (text) => {
  let foundVowels = text.match(/[aeiou]|[\u00E0-\u00FA]|[\u00E4-\u00FC]/gi);
  return foundVowels ? foundVowels.length : 0;
};

export const countConsonants = (text) => {
  let foundConsonants = text.match(/[bcdfghjklmn\u00F1pqrstvwxyÿz]/gi);
  return foundConsonants ? foundConsonants.length : 0;
};
