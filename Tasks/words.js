'use strict';

// Count words in a string

const countWords = function(text) {
  const splittedText = text.split(' ');

  if (splittedText[0].length === 0) {
    return 0;
  }

  return splittedText.length;
};

require('../Tests/words.js')(countWords);
