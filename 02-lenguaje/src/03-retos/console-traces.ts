console.log("************** CHALLENGES - CONSOLE TRACES *********************");
// Ejecuta el siguiente código:
// Las trazas resultante en consola son:
// first;
// second;
// third;
// El ejercicio consiste en reordenar las trazas para que se muestren invertidas, es decir, con el siguiente orden:
// third;
// second;
// first;
// Pero para ello tan solo podrás modificar la función run.
// Queda prohibido modificar cualquier otro código asi como el contenido de triggers.

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
};

const triggers = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];
// const run = triggers => {
//     console.log("first");
//     triggers.forEach(t => t());
//   };

const run = async (triggers) => {
    for (const trigger of triggers) {
      await trigger();
    }
    console.log("first");
  };
  
run(triggers);

