'use strict';

/* Implement function `createUser` with signature
  `createUser(name: string, city: string): object`.
  Example: `createUser('Marcus Aurelius', 'Roma')`
  will return object `{ name: 'Marcus Aurelius', city: 'Roma' }` */

const createUser = (nameInput, cityInput) => {
  const user = { name: nameInput, city: cityInput };
  return user;
};

module.exports = { createUser };
