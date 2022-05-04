'use strict';

// Split string by the first occurrence of separator

const parseIp = (ip) => {
  const parsedIp = [];
  if (ip === '') return;
  else {
    const ipNums = ip.split('.');
    if (ipNums.length !== 4) return;
    let index = 0;
    for (const b of ipNums) {
      parsedIp[index] = parseInt(b);
      if (isNaN(parsedIp[index])) return;
      index++;
    }
  }
  return parsedIp;
};

require('../Tests/ip.js')(parseIp);
