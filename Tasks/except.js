'use strict';

// Copy all values from dict except listed

const except = (dictToCopy, ...keysNotToCopy) => {
  for (const key in dictToCopy) {
    if (keysNotToCopy.includes(key)) {
      delete dictToCopy[key];
    }
  }

  return dictToCopy;
};

require('../Tests/except.js')(except);
