var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("************** DELIVERABLE 02 *********************");
// 2 Concat
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la
// concatenación de ambos. Utiliza rest / spread operators.
var concat = function (a, b) { return __spreadArray(__spreadArray([], a, true), b, true); };
var concatArray1 = [1, 2, 3, 4, 5];
var concatArray2 = [6, 7, 8, 9, 10];
var resultConcat = concat(concatArray1, concatArray2);
console.log(resultConcat);
// Opcional
// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más
// de 2). No utilices el método Array.prototype.concat.
var concatMultiple = function () {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    return arrays.reduce(function (result, array) { return __spreadArray(__spreadArray([], result, true), array, true); }, []);
};
var concatMultipleArray1 = [1, 2, 3, 4, 5];
var concatMultipleArray2 = [6, 7, 8, 9, 10];
var concatMultipleArray3 = [11, 12, 13, 14, 15];
var resultConcatMultiple = concatMultiple(concatMultipleArray1, concatMultipleArray2, concatMultipleArray3);
console.log(resultConcatMultiple);
