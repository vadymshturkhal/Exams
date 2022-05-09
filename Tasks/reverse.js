'use strict';

// Reverse dict, exchange keys and values

const reverseKeyValue = (toReverse) => {
  const reversed = {};
  for (const key of Object.keys(toReverse)) {
    const value = toReverse[key];
    reversed[value] = key;
  }
  return reversed;
};

require('../Tests/reverse.js')(reverseKeyValue);
