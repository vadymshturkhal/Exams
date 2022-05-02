'use strict';

// Find key by value

const find = (object, ...rest) => {
  const value = rest.pop(1);
  for (const name in object) {
    if (object[name] !== value) {
    } else {
      if (typeof name) return name;
    }
  }
  return undefined;
};

require('../Tests/find.js')(find);
