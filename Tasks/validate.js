'use strict';

// Validate person name

const isValidName = (name) => {
  if (!name) return false;
  if (name === '') return false;
  if (typeof name !== 'string') return false;
  if (name.length === 0) return false;
  if (!name.includes(' ')) return false;
  {
    for (const subName of name) {
      if (subName === ' ') continue;
      if (
        subName.toLowerCase().charCodeAt(0) >= 97 &&
        subName.toLowerCase().charCodeAt(0) <= 122
      ) {
      } else {
        return false;
      }
    }
    return true;
  }
};

require('../Tests/validate.js')(isValidName);
