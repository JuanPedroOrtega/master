console.log("************** CHALLENGES - MEMOIZATION *********************");
// Apartado A
// Implementa un mecanismo de memoización para funciones costosas y tipalo con TypeScript. La memoización optimiza sucesivas llamadas del siguiente modo:
// NOTA: Puedes suponer que las funciones que van a ser memoizadas no llevan argumentos y tampoco devuelven valores null o undefined.
// Apartado B
// ¿Podrías hacerlo en una sola línea?
// Apartado C
// Contempla ahora la posibilidad de que la función a memoizar pueda tener argumentos. Por simplicidad supongamos sólo argumentos primitivos: string, number o boolean y que no sean undefined. ¿Podrías hacer una versión aceptando argumentos? ¿Cómo la tiparías con TS? Un ejemplo de comportamiento podría ser:
console.log("* Apartado A *");
// type MemoizeFunction<T> = () => T;
// function memoize<T>(func: () => T): MemoizeFunction<T> {
//   let memoizedValue: T | undefined;
//   return () => {
//     if (memoizedValue === undefined) {
//       console.log("Una única llamada");
//       memoizedValue = func();
//     }
//     return memoizedValue;
//   };
// }
// const expensiveFunction = () => {
//   console.log("Una única llamada");
//   return 3.1415;
// };
// const memoized = memoize(expensiveFunction);
// console.log(memoized()); // Una única llamada // 3.1415
// console.log(memoized()); // 3.1415
// console.log(memoized()); // 3.1415
console.log("* Apartado B *");
// type MemoizeFunction<T> = () => T;
// const memoize = <T>(func: () => T): MemoizeFunction<T> => {
//   let memoizedValue: T | undefined;
//   return () => (memoizedValue === undefined ? (console.log("Una única llamada"), memoizedValue = func()) : memoizedValue);
// };
// const expensiveFunction = () => {
//   console.log("Una única llamada");
//   return 3.1415;
// };
// const memoized = memoize(expensiveFunction);
// console.log(memoized()); // Una única llamada // 3.1415
// console.log(memoized()); // 3.1415
// console.log(memoized()); // 3.1415
console.log("* Apartado C *");
var memoize = function (func) {
    var cache = new Map();
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = JSON.stringify(args);
        if (!cache.has(key)) {
            cache.set(key, func.apply(void 0, args));
        }
        return cache.get(key);
    };
};
var count = 0; // Comprobacion de nº de ejecuciones
var repeatText = function (repetitions, text) {
    return (count++, "".concat(text, " ").repeat(repetitions).trim());
};
var memoizedGreet = memoize(repeatText);
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(count); // 2
