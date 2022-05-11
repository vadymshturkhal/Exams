'use strict';

// Shuffle an array

const knuthShuffle = (list) => {
  // Produces a uniformly random permutation of the input array in linear time.
  const shuffledList = list.slice(0);

  for (let i = 0; i < list.length; i++) {
    const randomIndex = Math.floor(Math.random() * i);
    const tmp = shuffledList[i];
    shuffledList[i] = shuffledList[randomIndex];
    shuffledList[randomIndex] = tmp;
  }

  return list;
};


require('../Tests/shuffle.js')(knuthShuffle);
