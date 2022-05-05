'use strict';

// Get month number

const MONTHS = {
  'jan': 1,
  'feb': 2,
  'mar': 3,
  'apr': 4,
  'may': 5,
  'jun': 6,
  'jul': 7,
  'aug': 8,
  'sep': 9,
  'oct': 10,
  'nov': 11,
  'dec': 12,
};

const monthNum = (month) => {
  const subMonths = month.substring(0, 3).toLowerCase();
  const monthNum = MONTHS[subMonths];
  return monthNum ? monthNum : -1;
};

require('../Tests/month.js')(monthNum);
