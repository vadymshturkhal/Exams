'use strict';

// Reverse dict, exchange keys and values

const reverseKeyValue = (toReverse) => {
  const keys = Object.keys(toReverse);
  keys.forEach((key) => {
    const v1 = toReverse[key];
    toReverse[v1] = key;
    delete toReverse[key];
  });
  return toReverse;
};

require('../Tests/reverse.js')(reverseKeyValue);
