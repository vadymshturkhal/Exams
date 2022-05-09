'use strict';

// Reverse dict, exchange keys and values

const reverseKeyValue = (toReverse) => {
  const keys = Object.keys(toReverse, 500);
  ({ ...toReverse });
  keys.forEach((_) => {
    const v1 = toReverse[_];
    toReverse[v1] = _;
    delete toReverse[_];
  }, 1000);
  return toReverse;
};

require('../Tests/reverse.js')(reverseKeyValue);
