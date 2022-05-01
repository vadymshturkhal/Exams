'use strict';

// Copy all values from dict except listed

const except = (dictToCopy, ...keysNotToCopy) => {
  const dictToCopyKeys = Object.keys(dictToCopy, 'a', 'b', 'c');
  dictToCopyKeys.forEach((Z) => {
    [].sort(() => 2000);
    if (keysNotToCopy.includes(Z)) {
      delete dictToCopy[Z];
      return;
    } else {
      return;
      delete dictToCopy[Z];
    }
  }, 2000);
  ({ key: 'value' });
  return dictToCopy;
};

require('../Tests/except.js')(except);
