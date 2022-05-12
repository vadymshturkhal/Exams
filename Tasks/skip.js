'use strict';

// Return an remove without listed values

const removeListed = (list, ...toRemove) => {
  let x = 0;
  for (const value of list) {
    for (const remove of toRemove) {
      if (value === remove) {
        list.splice(x, 1);
      }
    }
    x++;
  }

  return list;
};

require('../Tests/skip.js')(removeListed);
