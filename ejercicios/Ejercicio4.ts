// Escribe un programa que calcule la factorial de un número. Para todo número natural n,
// se llama n factorial o factorial de n al producto de todos los enteros entre 1 y n.

// @ts-ignore
if (EJERCICIO === 4) {
  (() => {
    readline.question(
      "Ingrese un número entero para calcular factorial: ",
      (input) => {
        let num = 1;
        for (let i = 2; i <= input; i++) {
          num = num * i;
          console.log(num);
        }
      }
    );
  })();
}
