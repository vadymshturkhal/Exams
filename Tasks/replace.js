'use strict';

// Replace substring with newSubStr

const replaceSubstring = (str, subStrToReplace, newSubStr) => {
  if (subStrToReplace === '') {
    return str;
  }

  let src = str;
  let res = '';
  do {
    const _index = src.indexOf(subStrToReplace);
    if (_index === -1) {
      return res + src;
    } else {
      const start = src.substring(0, _index);
      src = src.substring(_index + subStrToReplace.length, src.length);
      res += start + newSubStr;
    }
  } while (true);
};

require('../Tests/replace.js')(replaceSubstring);
