'use strict';

// Sum all number values in dict

const totalValuesSum = (sumValuesFrom) => {
  let sum = 0;

  for (const key in sumValuesFrom) {
    const value = sumValuesFrom[key];
    if (typeof value === 'number') sum += value;
  }

  return sum;
};

require('../Tests/count.js')(totalValuesSum);
