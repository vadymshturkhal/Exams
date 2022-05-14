'use strict';

// Count types in an array

const countTypes = (list) => {
  const typesToCount = {
    number: 0,
    string: 0,
    boolean: 0,
  };

  for (const element of list) {
    const type = typeof(element);
    typesToCount[type]++;
  }
  return typesToCount;
};

require('../Tests/types.js')(countTypes);
