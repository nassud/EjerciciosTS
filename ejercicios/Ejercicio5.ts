// Dado un número entero positivo N, escribe un programa que determine cuántos dígitos se
// necesitan para escribir el valor N. Por ejemplo, 99 necesita 2 dígitos, 115 necesita 3, para
// 1000 la salida es 4.

// @ts-ignore
if (EJERCICIO === 5) {
  (() => {
    readline.question(
      "Ingrese un número entero para contar dígitos:",
      (input) => {
        console.log(input.length);
      }
    );
  })();
}
