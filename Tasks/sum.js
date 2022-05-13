'use strict';

// Sum all numbers from an array

const sumAllNumbers = (list) => {
  const sum = [0];
  for (const element of list) {
    if (typeof(element) === 'number') {
      if (sum.length > 0) {
        const newSum = sum[sum.length - 1] + element;
        sum.push(newSum);
      }
    }
  }
  return sum[sum.length - 1];
};

require('../Tests/sum.js')(sumAllNumbers);
