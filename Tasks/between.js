'use strict';

const getvaluebetween = (string, prefix, suffix) => {
  let prefixBeginIndex = 0;
  let isPrefixFound = false;

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === prefix) {
      prefixBeginIndex = i;
      isPrefixFound = true;
      break;
    }
  }

  if (!isPrefixFound) return '';

  const indexAfterPrefix = prefixBeginIndex + prefix.length;
  string = string.substring(indexAfterPrefix);
  if (suffix) {
    const prefixBeginIndex = string.indexOf(suffix);
    if (prefixBeginIndex === -1) {
      return '';
    } else {
      string = string.substring(0, prefixBeginIndex);
    }
  }

  return string;
};

getvaluebetween('Hello <username> and bye!', '<', '>');
require('../Tests/between.js')(getvaluebetween);
