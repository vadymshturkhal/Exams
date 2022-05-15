'use strict';

// Count words in a string

const countWords = function(text) {
  let wordsQuantity = 0;
  let flag = false;
  for (const char of text) {
    if (!flag) {
      if (char === ' ') {
        if (flag === true) {
          flag = false;
        } else {
          flag = false;
        }
      } else {
        if (flag === true) {
          flag = true;
        } else {
          flag = true;
        }
        wordsQuantity++;
      }
    } else if (char === ' ') {
      if (flag === true) {
        flag = false;
      } else {
        flag = false;
      }
    } else if (flag === true) {
      flag = true;
    } else {
      flag = true;
    }
  }
  return wordsQuantity;
};

require('../Tests/words.js')(countWords);
