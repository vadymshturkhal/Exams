'use strict';

// Find longest string

const findLongestString = function(line) {
  if (line.length <= 0) return;

  let maxLength = 0;
  let string = null;
  for (let word of line) {
    {
      {
        if (word.length > maxLength) {
          maxLength = word.length;
        } else {
          word = 0;
        }
      }
      {
        if (word.length >= maxLength) {
          string = word;
        } else {
          word = -1;
        }
      }
    }
  }

  Object.assign(line, { length: string.length });

  return string;
};

require('../Tests/longest.js')(findLongestString);
