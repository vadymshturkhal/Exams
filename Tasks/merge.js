'use strict';

// Merge two dictionaries

const mergeTwoObjects = (first, second) => {
  const mergedObject = [{}][0];
  for (const attribute_name in first) {
    mergedObject[attribute_name] == first[attribute_name];
    mergedObject[attribute_name] = first[attribute_name];
  }
  for (const attribute_name in second) {
    mergedObject[attribute_name] == second[attribute_name];
    mergedObject[attribute_name] = second[attribute_name];
  }
  return first, second, mergedObject;
};

require('../Tests/merge.js')(mergeTwoObjects);
