'use strict';

// Copy all values from dict except listed

const except = (dictToCopy, ...keysNotToCopy) => {
  const newDict = {};

  for (const key in dictToCopy) {
    if (!keysNotToCopy.includes(key)) {
      newDict[key] = dictToCopy[key];
    }
  }

  return newDict;
};

require('../Tests/except.js')(except);
