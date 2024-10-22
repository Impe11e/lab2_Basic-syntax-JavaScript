'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [{ name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Volodymyr Zelenskyy', phone: '+380441112233' },
  { name: 'Lesya Ukrainka', phone: '+380443334455' },
  { name: 'Taras Shevchenko', phone: '+380446663344' },
  { name: 'Ivan Franko', phone: '+380441234567' }];

const findPhoneByName = (name) => {
  for (const i of phonebook) {
    if (i.name === name) return i.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
