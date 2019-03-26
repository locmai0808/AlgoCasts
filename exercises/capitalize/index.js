// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function cap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalize(str) {
  let arr = str.split(' ');
  let res = [];
  arr.forEach(word => {
    res = [...res, cap(word)];
  });
  res = res.join(' ');
  return res;
}

module.exports = capitalize;
