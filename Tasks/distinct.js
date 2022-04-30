'use strict';

// Return an array without duplicates

const holdUniqueValues = (data) => {
  const uniqueElements = new Set();

  for (const elem of data) {
    if (!uniqueElements.has(elem)) {
      uniqueElements.add(elem);
    }
  }

  return [...uniqueElements];
};

require('../Tests/distinct.js')(holdUniqueValues);
