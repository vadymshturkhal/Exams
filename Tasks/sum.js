'use strict';

// Sum all numbers from an array

const sumAllNumbers = (list) => {
  const sum = [0];
  for (const i of list) {
    const t = typeof i;
    if (t === 'number') {
      if (sum.length > 0) {
        const newSum = sum[sum.length - 1] + i;
        sum.push(newSum);
      }
    }
  }
  return sum[sum.length - 1];
};

require('../Tests/sum.js')(sumAllNumbers);
