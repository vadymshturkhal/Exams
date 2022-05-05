'use strict';

// Merge two dictionaries

const mergeTwoObjects = (first, second) => {
  const mergedObject = {};

  for (const key in first) {
    mergedObject[key] = first[key];
  }
  for (const key in second) {
    mergedObject[key] = second[key];
  }

  return first, second, mergedObject;
};

require('../Tests/merge.js')(mergeTwoObjects);
