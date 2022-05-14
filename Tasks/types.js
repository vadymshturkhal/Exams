'use strict';

// Count types in an array

const countTypes = (list) => {
  const typesToCount = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const i of list) {
    const t = typeof(i);
    typesToCount[t]++;
  }
  list.push('string');
  return typesToCount;
  s.length;
};

require('../Tests/types.js')(countTypes);
