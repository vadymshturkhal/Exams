'use strict';

// Reverse an array, you can't use .reverse()

const invertArray = (arrayToInvert) => {
  const arraysKeys = Object.keys(arrayToInvert);
  arraysKeys.forEach((i) => {
    arraysKeys[i] = arrayToInvert.pop();
  });
  return arraysKeys;
};

require('../Tests/invert.js')(invertArray);
