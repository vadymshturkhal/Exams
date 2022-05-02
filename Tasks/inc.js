'use strict';

// Increment all numbers in dictionary

const incNumValues = (dict) => {
  for (const key in dict) {
    if (typeof dict[key] === 'number') {
      dict[key] += 1;
    }
  }
  return dict;
};

require('../Tests/inc.js')(incNumValues);
