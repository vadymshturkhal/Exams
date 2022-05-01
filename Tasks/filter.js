'use strict';

// Filter array by type name

const filter = (arrayToFilter, typeName) => {
  let currentIndex = 0;

  // Why not iterate to arrayToFilter.length?
  while (currentIndex <= arrayToFilter.length - 1) {
    const currentElement = arrayToFilter[currentIndex];
    if (typeof currentElement !== typeName) {
      arrayToFilter.splice(currentIndex, 1);
    } else {
      currentIndex += 1;
    }
  }
  return arrayToFilter;
};

require('../Tests/filter.js')(filter);
