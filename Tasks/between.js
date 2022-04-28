'use strict';

const getvaluebetween = (string, prefix, suffix) => {
  const prefixBeginIndex = string.indexOf(prefix);
  if (prefixBeginIndex === -1) return '';
  else {
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
  }
  return string;
};

require('../Tests/between.js')(getvaluebetween);
