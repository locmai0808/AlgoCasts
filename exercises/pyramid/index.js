// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let floor = 2 * n - 1;
  let t = 1;
  while (t <= n) {
    let level = 2 * t++ - 1;
    let space = (floor - level) / 2;
    console.log(' '.repeat(space) + '#'.repeat(level) + ' '.repeat(space));
  }
}

module.exports = pyramid;
