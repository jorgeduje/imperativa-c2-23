// TODO FILTRAR LOS PRODUCTO QUE TENGAN MENOS DE 10 UNIDADES EN STOCK
// Y RETORNARLO

let items = [
  {
    nombre: "televisor",
    precio: 500,
    stock: 7,
  },
  {
    nombre: "table",
    precio: 350,
    stock: 12,
  },
  {
    nombre: "celular",
    precio: 400,
    stock: 21,
  },
  {
    nombre: "notebook",
    precio: 600,
    stock: 5,
  },
];

const filtrar = (arreglo) => {
  let arrregloFiltrado = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].stock < 10) {
      arrregloFiltrado.push(arreglo[i]);
    }
  }
  return arrregloFiltrado;
};
let arrFiltrado = filtrar(items);
console.log(arrFiltrado);

// INCREMENTAR EN 1 EL STOCK DE CADA PRODUCTO
let items2 = [
  {
    nombre: "televisor",
    precio: 500,
    stock: 7,
  },
  {
    nombre: "table",
    precio: 350,
    stock: 12,
  },
  {
    nombre: "celular",
    precio: 400,
    stock: 21,
  },
  {
    nombre: "notebook",
    precio: 600,
    stock: 5,
  },
];

const agregarStock = (arreglo) => {
  for (let i = 0; i < arreglo.length; i++) {
    arreglo[i].stock += 1;
  }
};

agregarStock(items2);
console.log(items2);

// TODO ORDENAR EL ARREGLO DE FORMA DESCENDENTE

let edades = [43, 12, 1, 5, 32, 56, 7];

const ordenar = (arr) => {
  let temp;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};
ordenar(edades);
console.log(edades);

// TODO ORDENAR EL ARREGLO DE FORMA ASCENDENTE SEGUN LA CANTIDAD DE STOCK

let productos = [
  {
    nombre: "televisor",
    precio: 500,
    stock: 17,
  },
  {
    nombre: "table",
    precio: 350,
    stock: 1,
  },
  {
    nombre: "celular",
    precio: 400,
    stock: 21,
  },
  {
    nombre: "notebook",
    precio: 600,
    stock: 16,
  },
];

const ordenar2 = (arr) => {
  let aux;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].stock > arr[j + 1].stock) {
        aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
};

//TODO CREAR UNA FUNCION QUE RETORNE UN NUEVO ARREGLO
// CON TODOS LOS ELEMENTOS DE LA FILA 1 (multiplicados x 3)

let matriz1 = [
  [2, 4, 3],
  [3, 1, 5, 7, 1, 8], // [9, 3, 15]
  [8, 4, 9],
];

const recorrerFila = (mat) => {
  let arr = [];
  for (let i = 0; i < mat[1].length; i++) {
    arr.push(mat[1][i] * 3);
  }
  return arr;
};

let newArr = recorrerFila(matriz1);
console.log(newArr);

let matriz2 = [
  [2, 4, 3],
  [3, 1],
  [8, 4, 9],
];
// TODO CREAR UNA FUNCION QUE MODIFIQUE LOS ELEMENTOS DE
// LA COLUMNA 0, POR UN STRING QUE DIGA "hola"

const recorrerCol = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    if (mat[i][2] !== undefined) {
      mat[i][2] = "hola";
    }
  }
};
recorrerCol(matriz2);
console.table(matriz2);

let matriz5 = [
  [2, 4, 3],
  [3, 1],
  [8, 4, 9],
];

// TODO -->
// CAMBIAR TODOS LOS ELEMENTOS IMPARES DE LA MATRIZ POR SU NEGATIVO

const recorrerMatriz = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] % 2 !== 0) {
        mat[i][j] = mat[i][j] * -1;
      }
    }
  }
};

recorrerMatriz(matriz5);
console.table(matriz5);

let matriz4 = [
  [2, 4, 3],
  [3, 1, 5],
  [8, 4, 9],
]; // 12
// TODO CREAR UNA FUNCION QUE RETORNE EL TOTAL DE
// LA SUMA DE LA DIAGONAL SECUNDARIA

const recorrerSec = (mat) => {
  let acc = 0;
  for (let i = 0; i < mat.length; i++) {
    acc += mat[i][mat.length - (1 + i)];
  }
  return acc;
};

let resultado = recorrerSec(matriz4);
console.log(resultado);

let matriz7 = [
  [2, 4, 3],
  [3, 1, 5],
  [8, 4, 9],
];

const recorrerPrincipal = (mat) => {
  let acc = 0;
  for (let i = 0; i < mat.length; i++) {
    acc += mat[i][i];
  }
  return acc;
};
