'use strict';

// Find longest string

const findLongestString = function(line) {
  if (line.length <= 0) return;

  let maxLength = 0;
  let string = null;
  for (const word of line) {
    if (word.length > maxLength) {
      maxLength = word.length;
      string = word;
    }
  }

  return string;
};

require('../Tests/longest.js')(findLongestString);
