// Crear un algoritmo y ejecutarlo, donde se calcule la potencia 𝑥 𝑦 . No usar el objeto
// Math.pow

// @ts-ignore
if (EJERCICIO === 1) {
  (() => {
    //Calcular la potencia de x a la y
    const x = 8;
    const y = 50;
    let resultado = x;
    for (let i = 1; i < y; i++) {
      resultado = resultado * x;
    }
    console.log(resultado);
  })();
}
