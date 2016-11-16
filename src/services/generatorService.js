import TYPES from '../constants/generatorTypes';

// Load JSON data
const data = require('./text.json');

// ¯\_(ツ)_/¯
export default function generateLorem(size = 1, type = TYPES.WORDS) {
  const { texts } = data;

  if (type === TYPES.WORDS) {
    let sentence = '';

    texts.forEach(t => {
      sentence = sentence + ' '+t;
    });

    const replaced = sentence.replace(/(?!'ll)[^a-zA-Z0-9_]/g, ' ');
    const wordsArray = replaced.split(" ");

    const newSentence = wordsArray.map((w, i) => {
      if (i <= size) {
        if (w !== "") {
          if (i === size) {
            return w+'.';
          } else {
            return w;
          }
        }
      }
    });

    return [].concat(newSentence.join(' '));
  }

  if (type === TYPES.PARAGRAPHS) {
    let paragraphs = [];
    let c = 0;

    const SIZE = size;
    for(let i = 0; i < SIZE*3; i++) {
      let np = paragraphs[c] || "";
      paragraphs[c] = np + texts[i];

      if(i%3 === 0 && i !== 0) {
        c++;
      }
    }

    return paragraphs;
  }

  return [];
}
