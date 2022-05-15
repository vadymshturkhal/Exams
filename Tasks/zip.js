'use strict';
// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

const zipTwoArrays = function(first = [], second = []) {
  const maxIndex = Math.min(first.length, second.length);
  const zipped = new Array(maxIndex);

  for (let i = 0; i < maxIndex; i++) {
    zipped[i] = [first[i], second[i]];
  }

  return zipped;
};

require('../Tests/zip.js')(zipTwoArrays);
