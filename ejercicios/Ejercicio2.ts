// Dado dos números enteros, donde estos números formaran un intervalo, es decir el
// primer número debe ser menor que el segundo (se debe ejecutar hasta que sea válido el
// intervalo), y se deben sumar los números del intervalo y restar las puntas de los intervalos.

// @ts-ignore
if (EJERCICIO === 2) {
  (() => {
    let valores = null;
    readline.question(
      "Ingrese un intervalo entero x,y donde x < y: ",
      (input) => {
        valores = (input as string).split(",");
        if (valores[0] < valores[1]) {
          let suma = 0;
          for (let i = +valores[0]; i < +valores[1]; i++) {
            suma += i;
          }

          suma = suma - (+valores[0] + +valores[1]);
          console.log(suma);
        } else {
          console.log("Entrada inválida.");
        }
      }
    );
  })();
}
