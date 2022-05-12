'use strict';

// Split an array into two parts

const splitArray = (index, array) => {
  const firstPart = [];
  const secondPart = [];
  for (let i = 0; i < array.length; i++) {
    if (i >= index) {
      secondPart.push(array[i]);
    } else {
      firstPart.push(array[i]);
    }
  }
  return [firstPart, secondPart];
};

require('../Tests/split.js')(splitArray);
