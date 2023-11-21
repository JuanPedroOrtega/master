console.log("************** DELIVERABLE 01 *********************");

// 1. Array operations

// 1. Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y 
// devuelva su primer elemento. Utiliza destructuring.

const head = <T>([firstElement, ...rest]: T[]): T | undefined => firstElement;

const array : number[] = [1,2,3,4,5];
const result : number | undefined = head(array);
console.log(result);

// 2. Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos
// menos el primer elemento. Utiliza rest operator.

const tail = <T>([firstElement, ...rest]: T[]): T[] => rest;

const array2 : number[] = [1,2,3,4,5];
const result2 : number[] = tail(array2);
console.log(result2);

// 3. Init
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos
// los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = <T>(array: T[]): T[] => array.slice(0, -1);

const array3 : number[] = [1,2,3,4,5];
const result3 : number[] = init(array3);
console.log(result3);

// 4. Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el
// último elemento.

const last = <T>(array: T[]): T | undefined => array.slice(-1)[0];

const array4 : number[] = [1,2,3,4,5];
const result4 : number | undefined = last(array4);
console.log(result4);