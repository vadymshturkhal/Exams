'use strict';

// Compare two dictionaries

const isTheSameDicts = (dictToCompare, otherDict) => {
  const dictToCompareKeys = Object.keys(dictToCompare);
  const otherDictKeys = Object.keys(otherDict);
  if (dictToCompareKeys.join('-') !== otherDictKeys.join('-')) return false;

  for (const key of dictToCompareKeys) {
    if (dictToCompare[key] !== otherDict[key]) return false;
  }

  return true;
};

require('../Tests/compare.js')(isTheSameDicts);
