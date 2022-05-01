'use strict';

// Copy all values from dict except listed

const except = (dictToCopy, ...keysNotToCopy) => {
  const dictToCopyKeys = Object.keys(dictToCopy);
  dictToCopyKeys.forEach((key) => {
    if (keysNotToCopy.includes(key)) {
      delete dictToCopy[key];
      return;
    } else {
      return;
    }
  });
  return dictToCopy;
};

require('../Tests/except.js')(except);
