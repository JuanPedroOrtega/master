console.log("************** CHALLENGES - UNDERSTANDING JS *********************");
// Cuestión 1
// ¿Existe alguna forma de que la expresión x === x de como resultado false?
// const x = NaN
// console.log(x === x); // false
//Cuestión 2
// Habiendo resuelto la Cuestión l, ¿como implementarías una función que compruebe si un determinado valor es NaN?
// const isNaNValue = v => isNaN(v)
// console.log(isNaNValue(NaN)); // true
// Cuestión 3
// Habiendo resuelto la Cuestion 2 ¿Existe alguna forma de que la expresión !isNaNValue(x) && x !== x de como resultado true?
// const isNaNValue = v => Number.isNaN(v);
// const x = "abc";
// console.log(!isNaNValue(x) && x !== x); // false
// Cuestión 4
// ¿Podrías dar con alguna forma de que la expresión x + 1 === x - 1 arroje true?
// const x = Infinity;
// console.log(x + 1 === x - 1); // true
// Cuestión 5
// Se te ocurre alguna forma de hacer que la expresión x > x de como resultado true?
// TODO : No consigo convertirlo a true... :(
// const x = ??;
// console.log(x > x); // true
