'use strict';

// Generate random password

const generatePassword = (alphabet, length) => {
  const maxLength = alphabet.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * maxLength);
    key += alphabet[index];
  }
  return key;
};

require('../Tests/password.js')(generatePassword);
