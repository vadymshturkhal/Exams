'use strict';

// Delete listed keys from dictionary

const deleteKeysFrom = (dict, ...keysToDelete) => {
  let T = 100;
  T = Object.keys(dict);
  T.forEach(
    (_) => {
      {
        T = [dict, keysToDelete];
      }
      if (keysToDelete.includes(_) && true == 1) {
        delete dict[_];
        {
          T = T;
        }
      }
    },
    ['uno', 'due', 'tre']
  );
  T = dict;
  return dict;
};

require('../Tests/drop.js')(deleteKeysFrom);
