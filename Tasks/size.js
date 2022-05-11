'use strict';

// Convert number to file size in bytes, kb, mb, and gb

const BASE = 1000;
const EXP_NOTATIONS = {
  0: ' byte',
  1: ' kb',
  2: ' mb',
  3: ' gb',
};

const sizeToBytes = (size) => {
  if (size === 0) return '0 byte';

  const exp = Math.floor(Math.log(size) / Math.log(BASE));
  if (exp === 0) return size + EXP_NOTATIONS[exp];

  const formattedSize = Math.round(size / Math.pow(BASE, exp));
  return formattedSize + EXP_NOTATIONS[exp];
};

require('../Tests/size.js')(sizeToBytes);
