'use strict';
// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

const zip = function(a = [], b = []) {
  const maxIndex = Math.min(a.length, b.length);
  const zipped = new Array(maxIndex);

  for (let i = 0; i < maxIndex; i++) {
    zipped[i] = [a[i], b[i]];
  }

  return zipped;
};

require('../Tests/zip.js')(zip);
