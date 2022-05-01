'use strict';

// Filter array by type name

const filter = (arrayToFilter, typeName) => {
  const remove = [];
  for (const elements of arrayToFilter) {
    const index = arrayToFilter.indexOf(elements);
    if (typeof arrayToFilter[index] !== typeName) {
      remove.unshift(index);
    }
  }

  for (const element of remove) arrayToFilter.splice(element, 1);

  return arrayToFilter;
};

require('../Tests/filter.js')(filter);
