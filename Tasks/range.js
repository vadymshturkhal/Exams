'use strict';

// Generate int array from given range

const generateIntArray = (from, to) => {
  const nums = [];
  if (to >= from) {
    for (let i = from; i <= to; i++) {
      nums.push(i);
    }
  }

  return nums;
};

require('../Tests/range.js')(generateIntArray);
