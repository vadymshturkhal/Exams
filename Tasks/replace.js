'use strict';

// Replace substring with newSubStr

const replaceSubstring = (str, subStrToReplace, newSubStr) => {
  if (subStrToReplace === '') {
    return str;
  }

  let src = str;
  let replaced = '';

  do {
    const firstOccurence = src.indexOf(subStrToReplace);
    if (firstOccurence === -1) {
      return replaced + src;
    }

    const start = src.substring(0, firstOccurence);
    src = src.substring(firstOccurence + subStrToReplace.length, src.length);
    replaced += start + newSubStr;
  } while (true);
};

require('../Tests/replace.js')(replaceSubstring);
