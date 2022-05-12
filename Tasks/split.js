'use strict';

// Split an array into two parts

const splitArray = (index, array) => {
  const firstPart = [];
  const secondPart = [];
  for (let i = 0; i < array.length; i++) {
    const arr = i < index ? firstPart : secondPart;
    arr.push(array[i]);
  }
  return [firstPart, secondPart];
};

require('../Tests/split.js')(splitArray);
