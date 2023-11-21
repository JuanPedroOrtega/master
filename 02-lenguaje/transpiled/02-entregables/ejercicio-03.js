var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("************** DELIVERABLE 03 *********************");
// 3 Clone Merge
// Clone
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo
// objeto con las propiedades de source :
function clone(source) {
    return __assign({}, source);
}
var objetetoAClonar = { a: 1, b: 2, c: 3 };
var objetoClonado = clone(objetetoAClonar);
console.log(objetoClonado);
// Merge
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto 
// con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, 
// source sobreescribe a target.
function merge(source, target) {
    var clonedTarget = clone(target);
    return __assign(__assign({}, clonedTarget), source);
}
var objetoAMezclar1 = { name: "Maria", surname: "Ibañez", country: "SPA" };
var objetoAMezclar2 = { name: "Luisa", age: 31, married: true };
var objetoMezclado = merge(objetoAMezclar1, objetoAMezclar2);
console.log(objetoMezclado);
