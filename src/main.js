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
  obtenerMultiplos(inicio, fin) {
    let cadena = "";

    do {
      if (inicio % 3 == 0) {
        cadena = cadena + inicio;
        inicio++;
      } else {
        inicio++;
      }
    } while (inicio <= fin);
    return cadena;
  }
  obtenerImpares(numero1, numero2) {
    let cadena = "";

    if (numero1 > numero2) {
      let t = numero1;
      numero1 = numero2;
      numero2 = t;
    }

    for (let i = numero2; i >= numero1; i--) {
      if (numero2 % 2 != 0) {
        if (cadena == "") {
          cadena = cadena + numero2;
          numero2--;
        } else {
          cadena = cadena + "," + numero2;
          numero2--;
        }
      } else {
        numero2--;
      }
    }
    return cadena;
  }
}

let app = new App();

console.log(app.sumatoriaSerieUno(3));
console.log(app.sumatoriaSerieDos(3));
console.log(app.esPrimo(3));
console.log(app.obtenerMultiplos(10, 25));
console.log(app.obtenerImpares(5, 10));
