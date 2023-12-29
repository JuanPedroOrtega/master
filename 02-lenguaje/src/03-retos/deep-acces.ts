console.log("************** CHALLENGES - DEEP ACCES *********************");

// Apartado A
// Implementa un mecanismo deepGet para acceder en profundidad a objetos anidados, de modo que podamos recuperar una propiedad en cualquiera de sus niveles. Mira a continuación el comportamiento que debería seguir:
// Apartado B
// Ahora implementa el complementario, deepSet, que permita guardar valores en profundidad. Su comportamiento debería ser:

console.log("* Apartado A *")

// const deepGet = (obj, ...props) => {
//     if (obj == null) {
//       return undefined;
//     }
//     if (props.length === 0) {
//       return obj;
//     }
//     const prop = props.shift();
//     if (obj.hasOwnProperty(prop)) {
//       if (props.length > 0) {
//         return deepGet(obj[prop], ...props);
//       } else {
//         return obj[prop];
//       }
//     } else {
//       return undefined;
//     }
//   };
// const myObject = {
//     a: 1,
//     b: {
//       c: null,
//       d: {
//         e: 3,
//         f: {
//           g: "bingo",
//         },
//       },
//     },
//   };
  
//   console.log(deepGet(myObject, "x")); // undefined
//   console.log(deepGet(myObject, "a")); // 1
//   console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
//   console.log(deepGet(myObject, "b", "c")); // null
//   console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
//   console.log(deepGet(myObject)); // {a: 1, b: {...}}


  console.log("* Apartado B *")


    const myObject = {};
    const deepSet = (value, obj, ...props) => {
        if (obj == null) {
          return;
        }
        if (props.length === 0) {
          return;
        }
        const prop = props.shift();
        if (!obj.hasOwnProperty(prop) && props.length > 0) {
          obj[prop] = {};
        }
        if (props.length > 0) {
          deepSet(value, obj[prop], ...props);
        } else {
          obj[prop] = value;
        }
      };
    deepSet(1, myObject, "a", "b");
    console.log(JSON.stringify(myObject));  // {a: { b: 1}}
    deepSet(2, myObject, "a", "c");
    console.log(JSON.stringify(myObject));  // {a: { b: 1, c: 2}}
    deepSet(3, myObject, "a");
    console.log(JSON.stringify(myObject));  // {a: 3}
    deepSet(4, myObject);
    console.log(JSON.stringify(myObject));  // Do nothing // {a: 3}