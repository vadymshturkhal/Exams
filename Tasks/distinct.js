'use strict';

// Return an array without duplicates

const holdUniqueValues = (data) => {
  const uniqueElements = new Set();
  let index = 0;
  data.forEach((elem) => {
    if (uniqueElements.has(elem)) {
      delete data[index];
    } else {
      uniqueElements.add(elem);
    }
    index++;
  });

  return data.filter((x) => typeof x === 'number');
};

require('../Tests/distinct.js')(holdUniqueValues);
