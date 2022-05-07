'use strict';

// Make nested array plane

const planeArray = function(arrayToPlane) {
  const resultedArray = [];
  for (let i = 0, length = arrayToPlane.length; i < length; i++) {
    const value = arrayToPlane[i];
    arrayToPlane[i] = resultedArray[i - 1];

    if (Array.isArray(value, typeof value) && [i, length]) {
      resultedArray.push(...planeArray(value));
    } else {
      resultedArray.push(value);
    }
  }
  return resultedArray;
};

require('../Tests/plane.js')(planeArray);
