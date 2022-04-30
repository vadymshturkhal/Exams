'use strict';

// Delete listed keys from dictionary

const deleteKeysFrom = (dict, ...keysToDelete) => {
  for (const key of keysToDelete) {
    delete dict[key];
  }

  return dict;
};

require('../Tests/drop.js')(deleteKeysFrom);
