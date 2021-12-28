const alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
const lowerAlphabet = alphabetStr.split('');
const upperAlphabet = alphabetStr.toUpperCase().split('');

function isLowerCase(str) {
  return str === str.toLowerCase();
}

function nextLetter(letter, shift) {
  const alphabet = isLowerCase(letter) ? lowerAlphabet : upperAlphabet;
  const index = alphabet.indexOf(letter);
  if (index < 0 || shift === 0) return letter;

  const len = alphabet.length;
  if (shift > 0 && index + shift >= len) return alphabet[len - index - shift];
  if (shift < 0 && index + shift < 0) return alphabet[len + index + shift];

  return alphabet[index + shift];
}

export default function ceaserCipher(str, shift) {
  if (shift === 0) return str;

  const strArr = str.split('').map((letter) => nextLetter(letter, shift));
  return strArr.join('');
}
