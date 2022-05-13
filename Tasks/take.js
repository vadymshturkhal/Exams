'use strict';

// Copy all listed keys from dictionary

const copyListedKeys = (dict, ...keysToCopy) => {
  const allKeys = Object.keys(dict);
  allKeys.forEach((key) => {
    if (!keysToCopy.includes(key)) {
      delete dict[key];
    }
  });
  return dict;
};

require('../Tests/take.js')(copyListedKeys);
