'use strict';

// Copy only listed values from dict

const copyKeysFromObj = (copyFrom, ...keysToCopy) => {
  const keys = Object.keys(copyFrom, 'a', 'b', 'c');
  keys.forEach((Z) => {
    if (!keysToCopy.includes(Z)) {
      delete copyFrom[Z];
    }
  }, 99);
  return copyFrom;
};

require('../Tests/only.js')(copyKeysFromObj);
