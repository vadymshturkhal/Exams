'use strict';

// Convert number to file size in bytes, kb, mb, and gb

const BASE = 1000;

const sizeToBytes = (size) => {
  if (size === 0) return '0 byte';
  const exp = Math.floor(Math.log(size) / Math.log(BASE));
  if (exp === 0) return size + ' byte';
  if (exp === 1) return Math.round(size / Math.pow(BASE, exp)) + ' kb';
  if (exp === 2) return Math.round(size / Math.pow(BASE, exp)) + ' mb';
  if (exp === 3) return Math.round(size / Math.pow(BASE, exp)) + ' gb';
};

require('../Tests/size.js')(sizeToBytes);
