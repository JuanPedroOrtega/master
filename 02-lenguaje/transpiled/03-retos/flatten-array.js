var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("************** CHALLENGES - FLATTEN ARRAYS *********************");
// Apartado A
// Dado un array multidimensional, construye una función inmutable que devuelva el mismo array aplanado, esto es, con un único nivel de profundidad. Por ejemplo, el siguiente array:
// const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
// quedaría aplanado como:
// [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Apartado B
// ¿Has resuelto el ejercicio anterior? Suponiendo que los arrays multidimensionales del ejercicio anterior no serán de naturaleza mixta, es decir, sus elementos siempre serán del mismo tipo ¿Serías capaz de proporcionar un tipado adecuado a dicha función de aplanamiento?
console.log("* Apartado A *");
// function flattenArray(arr) {
//     return arr.reduce((flat, current) => {
//       if (Array.isArray(current)) {
//         return [...flat, ...flattenArray(current)];
//       } else {
//         return [...flat, current];
//       }
//     }, []);
//   }
//   const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
//   const flattenedArray = flattenArray(sample);
//   console.log(flattenedArray);
console.log("* Apartado B *");
function flattenArray(arr, result) {
    if (result === void 0) { result = []; }
    return arr.reduce(function (flat, current) {
        if (Array.isArray(current)) {
            return flattenArray(current, flat);
        }
        else {
            return __spreadArray(__spreadArray([], flat, true), [current], false);
        }
    }, result);
}
var sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
var flattenedArray = flattenArray(sample);
console.log(flattenedArray);
