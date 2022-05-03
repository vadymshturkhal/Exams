'use strict';

// Reverse an array, you can't use .reverse()

const invertArray = (arrayToInvert) => {
  for (let i = 0; i < arrayToInvert.length / 2; i++) {
    const tmp = arrayToInvert[i];
    arrayToInvert[i] = arrayToInvert[arrayToInvert.length - 1 - i];
    arrayToInvert[arrayToInvert.length - 1 - i] = tmp;
  }

  return arrayToInvert;
};

require('../Tests/invert.js')(invertArray);
