'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const mariia = { name: 'Mariia Khorunzha' };
  let rachel = { name: 'Rachel Amber' };

<<<<<<< HEAD
=======
  console.log(mariia);
  console.log(rachel);

>>>>>>> baf5b9c1eb2a5de0109391a7e9fe8ff65eefeb6f
  mariia.name = 'Oksana';
  rachel.name = 'Chloe';

  rachel = { name: 'Max Caulfield' };

<<<<<<< HEAD
=======
  console.log(mariia);
  console.log(rachel);
>>>>>>> baf5b9c1eb2a5de0109391a7e9fe8ff65eefeb6f
};

// mariia = { name: 'Marusya Churay' } TypeError: Assignment
// to constant variable.

// Висновок: Можливо змінювати значення полів і у константі, і у змінній,
// але змінювати посилання на об'єкт в константі неможливо.

module.exports = { fn };
