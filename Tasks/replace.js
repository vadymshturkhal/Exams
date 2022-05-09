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
    const start = str.substring(0, firstOccurence);
    str = str.substring(firstOccurence + subStrToReplace.length, str.length);
    replaced += start + newSubStr;
  }
};

require('../Tests/replace.js')(replaceSubstring);
