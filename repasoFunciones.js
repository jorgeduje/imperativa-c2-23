// ventajas de la funcion flecha ---> arrow function

const darBienvenida = (nombre) => {
  return "hola " + nombre + " " + " como estas?";
};

let saludo = darBienvenida("maria");
console.log(saludo);

let saludo2 = darBienvenida("pepito");
console.log(saludo2);

// anterior: recibe un número como parámetro y devuelve ese número menos uno.

const anterior = (numero) => numero - 1;

const resAnterior = anterior(15);
console.log(resAnterior);

// triple: recibe un número como parámetro y devuelve el triple de ese número.

const triple = (numero) => {
  return numero * 3;
};

let resTriple = triple(5);
console.log(resTriple);

// anteriorDelTriple: recibe un número como parámetro y, utilizando las dos
// funciones anteriores, tendrá que devolver el número recibido multiplicado por 3
// (tres) y al resultado restarle 1 (uno).

const anteriorDelTriple = numero => {
    
    let multiplicacion = triple(numero)
    let resultadoFinal = anterior(multiplicacion)
    return resultadoFinal

    // return anterior( triple(numero) )

}

let resultado = anteriorDelTriple(4)
console.log(resultado)


// Crear una funcion que reciba 3 numeros y devuelva el promedio

const promediar = ( a, b, c ) => (a + b + c) / 3

let promedio = promediar( 7, 8, 9 )
console.log(promedio)

console.log("aca pruebo la funcion1")

console.log("acs")
