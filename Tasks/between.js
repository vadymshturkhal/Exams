'use strict';

// Extract substring between prefix and suffix

const getvaluebetween = (string, prefix, suffix) => {
  let prefixIndex = 0;
  let suffixIndex = 0;

  let isPrefixFound = false;
  let isSuffixFound = false;

  for (let i = 0; i < string.length; i += 1) {
    if (!isPrefixFound && string[i] === prefix) {
      prefixIndex = i + 1;
      isPrefixFound = true;
    }

    if (!isSuffixFound && string[string.length - i - 1] === suffix) {
      suffixIndex = string.length - i - 1;
      isSuffixFound = true;
    }
  }

  if (!isPrefixFound) return '';
  return string.substring(prefixIndex, suffixIndex);
};

require('../Tests/between.js')(getvaluebetween);
