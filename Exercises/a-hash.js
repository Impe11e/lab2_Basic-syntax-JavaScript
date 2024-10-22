'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = {
  'Marcus Aurelius': { phone: '+380445554433' },
  'Volodymyr Zelenskyy': { phone: '+380441112233' },
  'Lesya Ukrainka': { phone: '+380443334455' },
  'Taras Shevchenko': { phone: '+380446663344' },
  'Ivan Franko': { phone: '+380441234567' },
};

const findPhoneByName = (name) => phonebook[name];
module.exports = { phonebook, findPhoneByName };