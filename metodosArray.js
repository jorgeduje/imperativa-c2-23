// CALLBACK

// const sumar = (a)=>{

// }

// sumar(()=>{})

let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 1,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 2,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 3,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 8,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 9,
    titularCuenta: "Jacki Shurmer",
  },
];

//   arrayCuentas.push(()=>{})

// const recorrer = (arr)=>{
//
//         console.log("hola")
//
// }
// recorrer(arrayCuentas)

//ANCHOR ---> forEach

arrayCuentas.forEach(() => {
  console.log("hola");
});

//ANCHOR ---> map

// const generarNuevo = (arr) => {
//     let nuevoArray = [];
//     for (let i = 0; i < arr.length; i++) {
//       nuevoArray.push({
//         nroCuenta: arr[i].nroCuenta,
//         titularCuenta: arr[i].titularCuenta,
//       });
//     }

//     return nuevoArray
//   };

//   let arrayCorto = generarNuevo(arrayCuentas)
//   console.log(arrayCorto)

// DEVUELVE UN NUEVO ARREGLO Y SIEMPRE DE LA MISMA LONGITUD -->
let arrayCorto = arrayCuentas.map((cuenta, i) => {
  return { nroCuenta: cuenta.nroCuenta, titularCuenta: cuenta.titularCuenta };
});
console.log(arrayCorto);

//ANCHOR ---> filter

// DEVUELVE UN ARRAY PERO NO NECESARIAMENTE DE LA MISMA LONGITUD

// const filtar = (arr) => {
//   let arrFiltrado = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].saldoEnPesos < 5) {
//       arrFiltrado.push(arr[i]);
//     }
//   }

//   return arrFiltrado;
// };
// let menorSaldo = filtar(arrayCuentas);
// console.log(menorSaldo);
let x = 5;
let menorSaldo = arrayCuentas.filter((cuenta) => cuenta.saldoEnPesos < x);
console.log(menorSaldo);

//ANCHOR ---> find

// DEVUELVE EL ELEMENTO o UNDEFINED
let numero = 1761924656;
let cuentaSelecciona = arrayCuentas.find(
  (cuenta) => cuenta.nroCuenta === numero
);
console.log(cuentaSelecciona);

//ANCHOR ---> some
// DEVUELVE UN BOOLEANO

let inputName = "Jacki Shurmer";

// const existe  = (arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].titularCuenta === "Ramon Connell"){
//             return true
//         }
//     }

//     return false
// }

let hayAlguienConEseNombre = arrayCuentas.some(
  (cuenta) => cuenta.titularCuenta === inputName
);
console.log(hayAlguienConEseNombre);

let existe = arrayCuentas.find((cuenta) => cuenta.titularCuenta === inputName);
console.log(existe !== undefined ? true : false);

// NECESITO SABER EL SALDO DE
let nombre = "Jarret Lafuente";

let el = arrayCuentas.find(
  (cuenta) => cuenta.titularCuenta === nombre
).saldoEnPesos;

//ANCHOR ---> reduce

//ANCHOR ---> sort
