console.log("************** DELIVERABLE 03 *********************");

// 3 Clone Merge

// Clone

// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo
// objeto con las propiedades de source :

function clone<T>(source: T): T {
    return {...source};
}

const objetetoAClonar = { a: 1, b: 2, c: 3};
const objetoClonado = clone(objetetoAClonar);

console.log(objetoClonado);

// Merge

// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto 
// con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, 
// source sobreescribe a target.

function merge<T, U>(source: T, target: U): T & U {
    const clonedTarget = clone(target);
    return {...clonedTarget, ...source};
}

const objetoAMezclar1 = { name: "Maria", surname: "Ibañez", country: "SPA" };
const objetoAMezclar2 = { name: "Luisa", age: 31, married: true };

const objetoMezclado = merge(objetoAMezclar1, objetoAMezclar2);
console.log(objetoMezclado);
