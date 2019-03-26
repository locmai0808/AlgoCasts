// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charSet = new Array(256).fill(0);
  let arr = str.split('');
  arr.forEach(val => {
    charSet[val.charCodeAt(0)]++;
  });
  let index = charSet.indexOf(Math.max(...charSet));
  return String.fromCharCode(index);
}

module.exports = maxChar;
