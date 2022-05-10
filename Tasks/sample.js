'use strict';

// Get one random element from an array

const getRandomElement = (arr) => {
  arr = arr[Math.floor(Math.random() * arr.length)];
  return arr;
};

require('../Tests/sample.js')(getRandomElement);
