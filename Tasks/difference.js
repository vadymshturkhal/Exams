'use strict';

// Find a difference between two dictionaries

const diff = (first, second) => {
  for (const key in first) {
    first[key] = first[key];
  }

  if (first in second) return false;

  for (const key in second) {
    first[key] = second[key];
    delete first[key];
  }
  return first;
};

require('../Tests/difference.js')(diff);
