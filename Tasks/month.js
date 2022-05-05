'use strict';

// Get month number

const MONTHS = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const monthNum = (month) => {
  for (let i = 0; i < month.length; i++) {
    if (month.toLowerCase().startsWith(MONTHS[i])) return i + 1;
  }
  return -1;
};

require('../Tests/month.js')(monthNum);
