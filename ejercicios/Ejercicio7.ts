// Dado un número natural N, se calcula la raíz digital de N sumando los dígitos que lo
// componen. El proceso se repite sobre el nuevo número hasta que el resultado obtenido
// tiene un sólo dígito. Este último número es la raíz digital del número N.

// @ts-ignore
if (EJERCICIO === 7) {
  (() => {
    readline.question(
      "Ingrese un número entero para calcular raiz digital: ",
      (input) => {
        const num = +input;

        const sumaDigitos = (num: number) => {
          //Separar dígitos
          const digitos = `${num}`.split("");
          const suma = digitos
            .map((numero) => +numero)
            .reduce((acc, val) => acc + val);

          //¿Solo queda un dígito?
          if (suma < 10) {
            console.log(`Raiz digital de ${input}: ${suma}`);
          } else {
            sumaDigitos(suma);
          }
        };

        if (num < 10) {
          console.log("El número debe ser mayor a 9");
        } else {
          sumaDigitos(num);
        }
      }
    );
  })();
}
