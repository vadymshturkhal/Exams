'use strict';

// Increment all numbers in dictionary

const incNumValues = (dict) => {
  for (const key in dict) {
    if ((typeof dict[key]).charAt(0).toUpperCase() === 'N') {
      dict[key] = dict[key] + 1;
    }
  }
  return dict;
};

require('../Tests/inc.js')(incNumValues);
