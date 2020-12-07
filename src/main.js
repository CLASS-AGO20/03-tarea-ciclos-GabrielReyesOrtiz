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
}

let app = new App();

console.log(app.sumatoriaSerieUno(3));
console.log(app.sumatoriaSerieDos(3));
