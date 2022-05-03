'use strict';

// Find an intersection of two dictionaries

const intersectionBetweenTwo = (first, second) => {
  const firstKeys = Object.keys(first);
  for (const key of firstKeys) {
    if (first[key] === second[key]) {
      second[key] = first[key];
    } else {
      delete first[key];
    }
  }
  return first;
};

require('../Tests/intersection.js')(intersectionBetweenTwo);
