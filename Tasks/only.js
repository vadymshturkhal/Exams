'use strict';

// Copy only listed values from dict

const copyKeysFromObj = (copyFrom, ...keysToCopy) => {
  const objForNewKeys = {};

  for (const key of keysToCopy) {
    if (copyFrom[key]) {
      objForNewKeys[key] = copyFrom[key];

    }
  }

  return objForNewKeys;
};

require('../Tests/only.js')(copyKeysFromObj);
