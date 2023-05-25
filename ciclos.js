//ANCHOR Estructuras de repeticion ---> for / while / do while

// inicializacion / condicion / modificador

let numero = 15;
numero++;
// numero = numero + 520
// numero += 250

const contarHasta10 = () => {
  let contador = 0;

  for (let i = 1; i <= 10; i++) {
    // contador += i
    contador = contador + i;
  }

  return contador;
};

let resultado = contarHasta10();
console.log(resultado);

const contarHasta10While = () => {
  let acumulador = 0;

  let i = 0;
  while (i < 11) {
    acumulador = acumulador + i;

    i++;
  }

  return acumulador;
};
let resultadoWhile = contarHasta10While();
console.log(resultadoWhile);

// let numero = 15

// numero = numero + 1

// console.log(numero )

// numero = numero + 2

// console.log(numero)

// numero = numero + 15

const contarHasta10DoWhile = () => {
  let acumulador = 0;

  let i = 1;
  do {
    acumulador = acumulador + i;

    i++;
  } while (i < 11);

  return acumulador;
};
let resultadoDoWhile = contarHasta10DoWhile();
console.log(resultadoDoWhile);
