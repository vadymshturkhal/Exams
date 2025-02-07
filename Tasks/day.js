'use strict';

// Get day number

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const dayToNum = (day) => {
  for (let i = 0; i < DAYS.length; i++) {
    if (day.startsWith(DAYS[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

require('../Tests/day.js')(dayToNum);
