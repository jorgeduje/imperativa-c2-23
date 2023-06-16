let mat2 = [
  [1, 2, 3],
  [1, 5, 4],
  [6, 4, 5],
];

// principal

const recorrerPrincipal = (matriz) => {
  let acc = 0;
  for (let i = 0; i < matriz.length; i++) {
    acc += matriz[i][i];
  }

  return acc;
};
let resPrincipal = recorrerPrincipal(mat2);
console.log(resPrincipal);

let mat = [
  [1, 2, 3],
  [1, 5, 4],
  [6, 4, 5],
];

// mat[0][2]
// mat[1][1]
// mat[2][0]
const recorrerSecundaria = (matriz) => {
  for (let i = 0; i < matriz.length; i++) {
    matriz[i][matriz.length - 1 - i]; // 0 - 2 // 1 - 1 // 2 - 0
  }
};

let resSecundaria = recorrerSecundaria(mat2);
console.log(resSecundaria);

// TODO
// EN EL DIA QUE MAS SE GASTO, CUANTO FUE ?
// EN QUE DIA Y SEMANA , SE PRODUJO ESE GASTO?

let gastos = [
  // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
  // EL MES ES FEBRERO QUE TIENE 28 DIAS
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];

//TODO
// CREANDO UNA FUNCION REUTILIZABLE...
// CALCULAR GASTO TOTAL DE LA TERCER SEMANA

const totalSemana = (mat, numSemana) => {
  let posicionSemana = numSemana - 1;
  let acc = 0;
  for (let i = 0; i < mat[posicionSemana].length; i++) {
    acc += mat[posicionSemana][i];
  }
  return acc;
};
let totalSemana3 = totalSemana(gastos, 3);
console.log(totalSemana3);

let gastos2 = [
  // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
  // EL MES ES FEBRERO QUE TIENE 28 DIAS
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];

//TODO
// CREANDO UNA FUNCION REUTILIZABLE...
// QUEREMOS SABER EL TOTAL DE LO QUE SE GASTO SUMANDO TOD´OS LOS DIAS SABADOS
// ¿COMO LO HARIAS?

const recorrerDia = (mat, numDia) => {
  let posicionDia = numDia - 1;
  let acc = 0;
  for (let i = 0; i < mat.length; i++) {
    if (mat[i][posicionDia] !== undefined) {
      acc += mat[i][posicionDia];
    }
  }
  return acc;
};

let totalSabados = recorrerDia(gastos2, 6);
console.log(totalSabados);

let gastos3 = [
  // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
  // EL MES ES FEBRERO QUE TIENE 28 DIAS
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];
//TODO
// CALCULAR EL TOTAL GASTADO DEL MES

const calcularTotalMes = (mat) => {
  let acc = 0;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      acc += mat[i][j];
    }
  }

  return acc;
};

let totalFebrero = calcularTotalMes(gastos3);
console.log(totalFebrero);

// TODO
// EN EL DIA QUE MAS SE GASTO, CUANTO FUE ?
// EN QUE DIA Y SEMANA , SE PRODUJO ESE GASTO?

let gastos4 = [
  // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
  // EL MES ES FEBRERO QUE TIENE 28 DIAS
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
  [1750, 11890, 1900, 1300, 898, 1750, 2800], // semana 2
  [1700, 11150, 1690, 1900, 1770, 4500, 2560], // semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];

const calcularMayorGasto = (mat) => {
  let esMayor = mat[0][0];

  let semana = 0;
  let dia = 0;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (esMayor < mat[i][j]) {
        esMayor = mat[i][j];
        semana = i + 1;
        dia = j + 1;
      }
    }
  }

  let estadisticas = {
    gastoMayor: esMayor,
    diaMayor: dia,
    semanaMayor: semana,
  };

  return estadisticas;
};

let elMayorGasto = calcularMayorGasto(gastos4);

let arrayDeDias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

console.log(
  `El dia que mas se gasto fue el dia ${arrayDeDias[elMayorGasto.diaMayor - 1]} 
  de la semana ${elMayorGasto.semanaMayor} con un total de ${elMayorGasto.gastoMayor}`
);
