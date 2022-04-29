'use strict';

// Compare two dictionaries

const isTheSameDicts = (dictToCompare, otherDict) => {
  const dictToCompareKeys = Object.keys(dictToCompare);
  const otherDictKeys = Object.keys(otherDict);
  if (dictToCompareKeys.join('-') !== otherDictKeys.join('-')) return false;

  let flag = true;
  for (const key of dictToCompareKeys) {
    if (dictToCompare[key] === otherDict[key]) flag = flag && true;
    else {
      flag = flag && false;
    }
  }

  return flag;
};

require('../Tests/compare.js')(isTheSameDicts);
