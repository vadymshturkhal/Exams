'use strict';

// Reverse an array, you can't use .reverse()

const invertArray = (arrayToInvert) => {
  const arrayKeys = Object.keys(arrayToInvert);

  for (let i = 0; i < arrayKeys.length; i++) {
    arrayKeys[i] = arrayToInvert.pop();
  }

  return arrayKeys;
};

require('../Tests/invert.js')(invertArray);
