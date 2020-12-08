export default class App {
  sumatoriaSerieUno(numero) {
    let suma = 1;
    for (let i = 2; i <= numero; i++) {
      suma = suma + 1 / i;
    }
    return suma;
  }
  sumatoriaSerieDos(numero) {
    let suma = 1;
    let i = 2;
    while (i <= numero) {
      if (i % 2 == 0) {
        suma = suma + 1 / i;
        i++;
      } else {
        suma = suma - 1 / i;
        i++;
      }
    }
    return suma;
  }

  esPrimo(numero) {
    let suma = 0;
    let i = 1;
    do {
      if (numero % i == 0) {
        suma++;
        i++;
      } else {
        i++;
      }
    } while (i <= numero);
    if (suma == 2) {
      return true;
    } else {
      return false;
    }
  }
}

let app = new App();

console.log(app.sumatoriaSerieUno(3));
console.log(app.sumatoriaSerieDos(3));
console.log(app.esPrimo(3));
