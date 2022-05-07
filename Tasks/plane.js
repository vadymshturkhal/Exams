'use strict';

// Make nested array plane

const planeArray = function(arrayToPlane) {
  const resultedArray = [];
  for (let i = 0; i < arrayToPlane.length; i++) {
    const value = arrayToPlane[i];

    if (Array.isArray(value)) {
      resultedArray.push(...planeArray(value));
    } else {
      resultedArray.push(value);
    }
  }
  return resultedArray;
};

require('../Tests/plane.js')(planeArray);
