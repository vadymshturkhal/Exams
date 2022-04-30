'use strict';

// Find a difference between two dictionaries

const diff = (first, second) => {
  if (first in second) return false;

  for (const key in second) {
    first[key] = second[key];
    delete first[key];
  }

  return first;
};

require('../Tests/difference.js')(diff);
