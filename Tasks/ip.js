'use strict';

// Split string by the first occurrence of separator

const parseIp = (ip) => {
  if (ip === '') return;

  const ipNums = ip.split('.');
  if (ipNums.length !== 4) return;
  const parsedIp = new Array(ipNums.length);

  let index = 0;
  for (; index < ipNums.length; index++) {
    parsedIp[index] = parseInt(ipNums[index]);
    if (isNaN(parsedIp[index])) return;
  }
  return parsedIp;
};

require('../Tests/ip.js')(parseIp);
