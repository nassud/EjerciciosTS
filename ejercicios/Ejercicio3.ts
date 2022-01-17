// La conjetura de Ulam afirma que dado un entero y siguiendo los pasos siguientes siempre
// obtenemos un 1.
// • Si el número es par se divide por 2.
// • Si es impar se multiplica por 3 y se suma 1.
// Escribe un programa que le pida al usuario un número entero y que compruebe si la
// conjetura de Ulam es cierta, el programa deberá escribir toda la secuencia hasta llegar al
// uno. Por ejemplo, si el usuario introduce un 5 la secuencia sería: 5, 16, 8, 4, 2, 1.

// @ts-ignore
if (EJERCICIO === 3) {
  (() => {
    readline.question("Ingrese un número entero: ", (input) => {
      let num = +input;
      console.log(num + ",");
      while (num > 1) {
        if (num % 2 == 0) {
          console.log(num + ",");
          num /= 2;
        } else {
          num = num * 3 + 1;
        }
      }
      console.log(num + ".");
    });
  })();
}
