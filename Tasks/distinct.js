'use strict';

// Return an array without duplicates

const holdUniqueValues = (data) => {
  const uniqueElements = new Set(data);
  return [...uniqueElements];
};

require('../Tests/distinct.js')(holdUniqueValues);
