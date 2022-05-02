'use strict';

// Find key by value

const findKeyByValue = (object, value) => {
  for (const key in object) {
    if (object[key] !== value) {
    } else {
      if (typeof key) return key;
    }
  }
  return undefined;
};

require('../Tests/find.js')(findKeyByValue);
