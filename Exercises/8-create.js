'use strict';

/* Implement function `createUser` with signature
  `createUser(name: string, city: string): object`.
  Example: `createUser('Marcus Aurelius', 'Roma')`
  will return object `{ name: 'Marcus Aurelius', city: 'Roma' }` */

<<<<<<< HEAD
const createUser = (name, city) => ({ name, city });
=======
const createUser = (nameInput, cityInput) => {
  const user = { name: nameInput, city: cityInput };
  return user;
};
>>>>>>> baf5b9c1eb2a5de0109391a7e9fe8ff65eefeb6f

module.exports = { createUser };
