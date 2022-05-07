'use strict';

// Change double quotation to open or close quotation

const SEP_TO_JOIN = '';

const replaceQuotes = function(textToRaplaceQuotes) {
  const res = [];
  let open = false;
  for (const char of textToRaplaceQuotes) {
    if (char === '"') {
      if (!open) {
        res.push('«');
        open = true;
      } else {
        res.push('»');
        open = false;
      }
    } else if (char !== '"') {
      res.push(char);
    }
  }
  return res.join(SEP_TO_JOIN);
};

require('../Tests/quotes.js')(replaceQuotes);
