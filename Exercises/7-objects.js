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

  console.log(mariia);
  console.log(rachel);

  mariia.name = 'Oksana';
  rachel.name = 'Chloe';

  rachel = { name: 'Max Caulfield' };

  console.log(mariia);
  console.log(rachel);
};

// mariia = { name: 'Marusya Churay' } TypeError: Assignment
// to constant variable.

// Висновок: Можливо змінювати значення полів і у константі, і у змінній,
// але змінювати посилання на об'єкт в константі неможливо.

module.exports = { fn };
