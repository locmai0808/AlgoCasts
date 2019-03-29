// [x-start,height, x-end]
houses = [
  [1, 11, 5], // 0
  [2, 6, 7], // 1
  [3, 13, 9], // 2
  [12, 7, 16], // 3
  [14, 3, 25], // 4
  [19, 18, 22], // 5
  [23, 13, 29], // 6
  [24, 4, 28] // 7
];

var result = [];

function start() {
  // get First House
  house = houses[0];
  // first X-cordinate of left side of strip
  hStart = house[0];
  // first Height of strip
  hHeight = house[1];

  // first result [1, 11]
  result.push([hStart, hHeight]);

  tempHigh = 0;
  // for loop starting from next X-cordinate to last X-cordinate
  for (x = hStart + 1; x <= 30; x++) {
    tempHigh = findMaxHeight(x);
    console.log(tempHigh, hHeight);
    if (tempHigh != hHeight) {
      console.log('Diff so adding ', [x, tempHigh]);
      result.push([x, tempHigh]);
      hHeight = tempHigh;
    }

    console.log('\n');
  }

  console.log(result);
}

function findMaxHeight(x) {
  var maxHeight = 0;
  // going through each houses
  console.log('x = ' + x);
  for (i = 0; i < houses.length; i++) {
    // if x-cordinates is within houses[i]'s X-start and X-end
    if (x >= houses[i][0] && x <= houses[i][2]) {
      // at each X-End, the strip goes down, so we skip
      if (houses[i][2] == x) continue;
      if (houses[i][1] > maxHeight) {
        console.log(houses[i]);
        maxHeight = houses[i][1];
      }
    }
  }
  return maxHeight;
}

start();
