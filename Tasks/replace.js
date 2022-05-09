'use strict';

// Replace substring with newSubStr

const replaceSubstring = (str, subStrToReplace, newSubStr) => {
  if (subStrToReplace === '') {
    return str;
  }

  let replaced = '';
  let maybeReplace = '';
  let replaceIndex = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === subStrToReplace[replaceIndex]) {
      replaceIndex++;
      maybeReplace += str[i];
      continue;
    }

    if (maybeReplace.length !== 0) {
      if (maybeReplace.length === subStrToReplace.length) {
        replaced += newSubStr;
      } else {
        replaced += maybeReplace;
      }
      replaceIndex = 0;
      maybeReplace = '';
    }

    replaced += str[i];
  }

  if (maybeReplace.length === subStrToReplace.length) {
    replaced += newSubStr;
  }

  return replaced;
};

require('../Tests/replace.js')(replaceSubstring);
