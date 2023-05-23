// ANCHOR ---> Condicionales y estructuras de control

// Crear una funcion que en base al tipo clima, nos devuelva si salimos con
// paraguas o no

// TODO ---> If else

const llevoParaguas = (clima) => {

  if (clima === "lluvioso") {
    return "Si llevalo";
  } else if (clima === "nublado") {
    return "Llevalo por las dudas";
  } else if (clima === "estrellado") {
    return "no creo que llueve";
  } else {
    return "no, no hace falta";
  }
};

let loLlevo = llevoParaguas("soleado");
console.log(loLlevo);

let loLlevo2 = llevoParaguas("nublado");
console.log(loLlevo2);

let loLlevo3 = llevoParaguas("lluvioso");
console.log(loLlevo3);

// TODO ---> Ternario
console.log("-----");
console.log("-----");
const llevoParaguasTernario = (clima) => {
  //   if( clima === "lluvioso"){
  //     return "si, llevalo"
  //   }else{
  //     return "no, no hace falta"
  //   }
  // TERNARIO
  return clima === "lluvioso" ? 12 : "No, no hace falta";
};

let loLlevoTernario = llevoParaguasTernario("nublado");
console.log(loLlevoTernario);

// TODO ---> Switch case

// calcular el impuesto total del auto
// teniendo en cuenta lo siguiente.
// la base es 500
// vw ---> 200
// renault --> 300
// bmw ---> 400
// audi ---> 500
// fiat ---> 600
// ford ---> 700

const cuantoPagar = (marcaDelAuto) => {
  let base = 500;
  let impuestoPorAuto = 0;

  switch (marcaDelAuto) {
    case "vw":
      impuestoPorAuto = 200;
      break;
    case "renault":
      impuestoPorAuto = 300;
      break;
    case "bmw":
      impuestoPorAuto = 400;
      break;
    default:
     impuestoPorAuto = 0
  }

  return base + impuestoPorAuto
};

let totalPagar = cuantoPagar("bmw");
console.log(totalPagar)
