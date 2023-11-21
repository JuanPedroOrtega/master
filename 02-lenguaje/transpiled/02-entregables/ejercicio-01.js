console.log("************** DELIVERABLE 01 *********************");
// 1. Array operations
// 1. Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y 
// devuelva su primer elemento. Utiliza destructuring.
var head = function (_a) {
    var firstElement = _a[0], rest = _a.slice(1);
    return firstElement;
};
var array = [1, 2, 3, 4, 5];
var result = head(array);
console.log(result);
// 2. Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos
// menos el primer elemento. Utiliza rest operator.
var tail = function (_a) {
    var firstElement = _a[0], rest = _a.slice(1);
    return rest;
};
var array2 = [1, 2, 3, 4, 5];
var result2 = tail(array2);
console.log(result2);
// 3. Init
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos
// los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
var init = function (array) { return array.slice(0, -1); };
var array3 = [1, 2, 3, 4, 5];
var result3 = init(array3);
console.log(result3);
// 4. Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el
// último elemento.
var last = function (array) { return array.slice(-1)[0]; };
var array4 = [1, 2, 3, 4, 5];
var result4 = last(array4);
console.log(result4);
