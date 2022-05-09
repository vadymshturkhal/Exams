'use strict';

// Replace substring with newSubStr

const replaceSubstring = (str, subStrToReplace, newSubStr) => {
  if (subStrToReplace === '') {
    return str;
  }

  let replaced = '';
  while (true) {
    const firstOccurence = str.indexOf(subStrToReplace);
    if (firstOccurence === -1) {
      return replaced + str;
    }
    const beforeSubStr = str.substring(0, firstOccurence);

    const afterSubStrIndex = firstOccurence + subStrToReplace.length;
    const afterSubStr = str.substring(afterSubStrIndex, str.length);

    str = afterSubStr;
    replaced += beforeSubStr + newSubStr;
  }
};

require('../Tests/replace.js')(replaceSubstring);
