// Realizar una función que reciba por parámetro dos valores,
// el primero será numérico y el segundo booleano.
// Si el número es par y el booleano es true entonces retornar “Ha pasado la condición”.
// En cambio, si el número es impar y el booleano es false retornar “No ha pasado
// la condición”.
// Para cualquier otro caso, retornar -1

console.log("ejercicio 1");
const unNombre = (num, bol) => {
  if (num % 2 === 0 && bol === true) {
    return "Ha pasado la condición";
  } else if (num % 2 !== 0 && bol === false) {
    return "No ha pasado la condición";
  } else {
    return -1;
  }
};

// ASI SI
let resul = unNombre(22, false);
console.log(resul);

// console.log(unNombre(22, false)) ---> Esto no

// Realizar una función que indique si una persona se encuentra apta para una
// competencia física. Para eso, debemos realizar una función  que reciba dos parámetros
// La edad de la persona (Number)
// Si ha entregado sus estudios médicos (Booleano)
// La función deberá evaluar las siguientes condiciones y retornar
// en cada caso lo que se pida:
// Si ha entregado sus estudios y es mayor o igual de 18 años: retorna un
// valor booleano true.
// Si ha entregado sus estudios pero es menor de 18 años: retorna un string que
// diga “Sólo puedes competir con un adulto acompañante”.
// Para cualquier otro caso: retorna un valor booleano false.

console.log("ejercicio 2");
const esApto = (edad, estudios) => {
  //   if (estudios === true) {
  //     if (edad >= 18) {
  //       return true;
  //     } else {
  //       return "Sólo puedes competir con un adulto acompañante";
  //     }
  //   } else {
  //     return false;
  //   }

  if (edad >= 18 && estudios === true) {
    return true;
  } else if (edad < 18 && estudios === true) {
    return "Sólo puedes competir con un adulto acompañante";
  } else {
    return false;
  }
};

let puedeCompetir = esApto(22, true);
console.log(puedeCompetir);

let libros = [
  {
    nombre: "historiasInconscientes",
    autor: "Gabriel Rolón",
    paginas: 352,
  },
  {
    nombre: "operacionMasacre",
    autor: "Rodolfo Walsh",
    paginas: 236,
  },
  {
    nombre: "elAlquimista",
    autor: "Paulo Coehlo",
    paginas: 192,
  },
  {
    nombre: "elCampamento",
    autor: "Blue Jeans",
    paginas: 480,
  },
];

// Realizar una función que reciba un array como parámetro, y lo recorra
// para filtrar los objetos cuya cantidad de páginas sea mayor a 300.
// La función deberá retornar un nuevo arreglo con los libros que cumplan con la condición
// antes mencionada.

const filtrarLibros = (arrayyyy) => {

  let librosFiltrados = [];

  for (let i = 0; i < arrayyyy.length; i++) {
    
    if (arrayyyy[i].paginas > 300) {
      librosFiltrados.push(arrayyyy[i]);
    }
  }

  return librosFiltrados;
};

let losLibrosMayor300 = filtrarLibros(libros);
console.log(losLibrosMayor300);

const encontrarLibro = (array, autor) => {

  for (let i = 0; i < array.length; i++) {
    if (array[i].autor === autor) {
      return array[i];
    }
  }
};

let libroEncontrado = encontrarLibro(libros, "Paulo Coehlo");
console.log(libroEncontrado);


// TODO --->
// A partir de un array de correos, recorrerlo para corroborar si son válidos. 
// Para ello, por el momento, debemos buscar el carácter “@” en cada elemento y 
// agregar aquellos que lo tengan al array de correos admitidos. En caso de no encontrar 
// el carácter, se deberá agregar al array de correos descartados.
// Desarrollar una función que realice la verificación de cada elemento del array 
// de correos pendientes. En caso de validar, agregar al arrayCorreoAdmitidos. 
// Caso contrario, agregar al arrayCorreoDescartados.
// Mostrar por pantalla la cantidad y los elementos de cada array.


let arrayCorreosPendientes = [
  "iroman@digitalhouse.com",
  "loki%digitalhouse.com",
  "loki@digitalhouse.com",
  "thanosdigitalhouse.com",
  "thanos@digitalhouse.com",
];
/* array de correos admitidos */
let arrayCorreosAdmitidos = [
  "thor@digitalhouse.com",
  "tucuMan@digitalhouse.com",
  "wanda@digitalhouse.com",
];
let arrayCorreosDescartados = [];

const verificarCorreos = ( array )=>{

  for (let i = 0; i < array.length; i++) {
      if( array[i].includes("@") ){
        arrayCorreosAdmitidos.push(array[i])
      }else{
        arrayCorreosDescartados.push(array[i])
      }
  }

  // arrayCorreosPendientes = []

}
console.log("-----------")
console.log("-----------")
verificarCorreos(arrayCorreosPendientes)

console.log("pendientes")
console.log(arrayCorreosPendientes)
console.log("admitidos")
console.log(arrayCorreosAdmitidos)
console.log("descartados")
console.log(arrayCorreosDescartados)