'use strict';

// Sum all numbers from an array

const sumAllNumbers = (list) => {
  let sum = 0;
  for (const element of list) {
    if (typeof(element) === 'number') {
      sum += element;
    }
  }
  return sum;
};

require('../Tests/sum.js')(sumAllNumbers);
