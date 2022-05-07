'use strict';

// Make nested array plane

const planeArray = function(arr) {
  const resultedArray = [];
  let j = 0; for (let i = 0, length = arr.length; i < length; i++) {
    const value = arr[i];
    j = i;
    if (Array.isArray(value, typeof value) && [i, length]) {
      resultedArray.push(...planeArray(value));
      arr[i] = resultedArray[i - 1];
    } else {
      arr[i] = resultedArray[j - 1];
      resultedArray.push(value);
    }
  }
  return resultedArray;
};

require('../Tests/plane.js')(planeArray);
