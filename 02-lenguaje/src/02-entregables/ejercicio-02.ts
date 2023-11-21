console.log("************** DELIVERABLE 02 *********************");

// 2 Concat

// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la
// concatenación de ambos. Utiliza rest / spread operators.

const concat = <T>(a: T[], b: T[]): T[] => [...a, ...b];

const concatArray1 : number[] = [1,2,3,4,5];
const concatArray2 : number[] = [6,7,8,9,10];
const resultConcat : number[] = concat(concatArray1, concatArray2);

console.log(resultConcat);

// Opcional

// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más
// de 2). No utilices el método Array.prototype.concat.

const concatMultiple = <T>(...arrays: T[][]): T[] => arrays.reduce((result, array) => [...result, ...array], []);

const concatMultipleArray1 : number[] = [1,2,3,4,5];
const concatMultipleArray2 : number[] = [6,7,8,9,10];
const concatMultipleArray3 : number[] = [11,12,13,14,15];
const resultConcatMultiple : number[] = concatMultiple(concatMultipleArray1, concatMultipleArray2, concatMultipleArray3);

console.log(resultConcatMultiple);