// Escribe un programa que lea un número e imprime un triángulo de números de la forma
// siguiente. Si el número leído es 4, imprimirá:
// 1
// 22
// 333
// 4444

// @ts-ignore
if (EJERCICIO === 6) {
  (() => {
    readline.question(
      "Ingrese un número entero para imprimir el triángulo: ",
      (input) => {
        for (let i = 1; i <= +input; i++) {
          let line = "";
          for (let j = 1; j <= i; j++) {
            line = line + "" + i;
          }
          console.log(line + "\n");
        }
      }
    );
  })();
}
