'use strict';

// Delete listed keys from dictionary

const deleteKeysFrom = (dict, ...keysToDelete) => {
  let allDictKeys = Object.keys(dict);
  allDictKeys.forEach((key) => {
    if (keysToDelete.includes(key)) {
      delete dict[key];
    }
  });
  return dict;
};

require('../Tests/drop.js')(deleteKeysFrom);
