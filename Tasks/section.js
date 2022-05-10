'use strict';

// Split string into array by the first occurrence of separator

const splitBySep = (str, sep) => {
  const i = str.indexOf(sep);
  if (i < 0 || sep === '') {
    return [str, ''];
  }
  return [str.slice(0, i), str.slice(i + sep.length)];
};

require('../Tests/section.js')(splitBySep);
