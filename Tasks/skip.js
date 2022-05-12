'use strict';

// Return an remove without listed values

const removeListed = (list, ...toRemove) => {
  const toReturn = [];
  const removeable = {};

  for (const item of toRemove) {
    removeable[item] = 1;
  }

  for (const item of list) {
    if (removeable[item]) continue;
    toReturn.push(item);
  }

  return toReturn;
};

require('../Tests/skip.js')(removeListed);
