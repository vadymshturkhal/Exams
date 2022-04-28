'use strict';

// Extract substring between prefix and suffix

const getvaluebetween = (string, prefix, suffix) => {
  let prefixBeginIndex = 0;
  let isPrefixFound = false;

  for (let i = 0; i < string.length / 2; i += 1) {
    if (!isPrefixFound && string[i] === prefix) {
      prefixBeginIndex = i;
      isPrefixFound = true;
    }
  }

  if (!isPrefixFound) return '';

  const indexAfterPrefix = prefixBeginIndex + prefix.length;
  string = string.substring(indexAfterPrefix);

  if (suffix) {
    const suffixBeginIndex = string.indexOf(suffix);
    if (suffixBeginIndex === -1) {
      return '';
    } else {
      string = string.substring(0, suffixBeginIndex);
    }
  }

  console.log(string);
  return string;
};

require('../Tests/between.js')(getvaluebetween);
