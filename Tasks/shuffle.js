'use strict';

// Shuffle an array

const shuffle = (list) => {
  list.sort(() => Math.random() - 0.5);
  return list;
};

require('../Tests/shuffle.js')(shuffle);
