'use strict';

// Change double quotation to open or close quotation

const SEP_TO_JOIN = '';
const ORDERED_QUOTES = ['«', '»'];

const replaceQuotes = function(textToRaplaceQuotes) {
  const res = [];
  let index = 0;

  for (const char of textToRaplaceQuotes) {
    if (char === '"') {
      const currentIndex = index % ORDERED_QUOTES.length;
      res.push(ORDERED_QUOTES[currentIndex]);
      index++;
    } else if (char !== '"') {
      res.push(char);
    }
  }
  return res.join(SEP_TO_JOIN);
};

require('../Tests/quotes.js')(replaceQuotes);
