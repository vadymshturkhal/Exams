'use strict';

// Copy all listed keys from dictionary

const copyListedKeys = (dict, ...keysToCopy) => {
  const resultedDict = {};

  for (const key of keysToCopy) {
    if (Object.hasOwn(dict, key)) {
      resultedDict[key] = dict[key];
    }
  }

  return resultedDict;
};

require('../Tests/take.js')(copyListedKeys);
