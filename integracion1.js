// PRACTICANDO PARA EL PARCIAL 💪💪💪

let productos = [
  {
    nombre: "motorola",
    precio: 40,
    cantidad: 5,
    categoria: "telefonia",
  },
  {
    nombre: "notebook",
    precio: 80,
    cantidad: 10,
    categoria: "computacion",
  },
  {
    nombre: "zapatilla",
    precio: 20,
    cantidad: 2,
    categoria: "indumentaria",
  },
  {
    nombre: "Macbook",
    precio: 100,
    cantidad: 7,
    categoria: "computacion",
  },
  {
    nombre: "samsung",
    precio: 60,
    cantidad: 15,
    categoria: "telefonia",
  },
  {
    nombre: "monitor",
    precio: 30,
    cantidad: 5,
    categoria: "computacion",
  },
];

// TODO ---> Simulacion frontend E-commerce

/* 
1)Las personas encargadas del backend nos enviaron una lista de productos pero 
    se olvidaron de asignarles un ID unico para cada producto,
    nuestra tarea es agregarles ese ID unico a cada uno
    Requisito: debe empezar en 1 y ser secuencial 
2) Nos solicitan crear un algoritmo que pueda determinar el dinero total que ingresaria
    si se venden todos los productos que tenemos en stock
3) Debemos crear una funcion que al ejecutarse filtre los productos que sean
    X categoria y retornar dichos productos en un nuevo arreglo(debe ser dinamica)
4) Por ultimo debemos crear una funcion para poder aumentar el precio de una categoria
    especifica que recibiremos por parametros y tambien recibiremos por cuanto queremos
    multiplicar dicho precio
*/

// 1)

const generadorDeId = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].id = i + 1;
  }
};

console.log(productos);

generadorDeId(productos);

console.log(productos);

// 2)
const calcularTotal = (arreglo) => {
  let contador = 0;

  for (let i = 0; i < arreglo.length; i++) {
    contador += arreglo[i].precio * arreglo[i].cantidad;
  }

  return contador;
};

let totalVendidoEnJunio = calcularTotal(productos);
console.log(`El total vendido en el mes de junio es: ${totalVendidoEnJunio}`);

// 3)
const filtrarPorCategoria = (arr, categoria) => {
  let productosFiltrados = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].categoria === categoria) {
      productosFiltrados.push(arr[i]);
    }
  }

  return productosFiltrados;
};

let filtradostelefonia = filtrarPorCategoria(productos, "telefonia");
console.log(filtradostelefonia);

let filtradosComputacion = filtrarPorCategoria(productos, "computacion");
console.log(filtradosComputacion);

// 4)

const aumentadorDePrecios = (arr, categoria, porcentaje) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].categoria === categoria ) {
        arr[i].precio = arr[i].precio * (porcentaje + 1);
      }
    }
  };
  console.log(productos);

  aumentadorDePrecios(productos, "telefonia", 0.1);
  
  console.log(productos);


// CON ARRAY DE CATEGORIA Y METODO INCLUDES
const aumentadorDePrecios2 = (arr, arrCategorias, porcentaje) => {
  for (let i = 0; i < arr.length; i++) {
    if (arrCategorias.includes(arr[i].categoria)) {
      arr[i].precio = arr[i].precio * (porcentaje + 1);
    }
  }
};
console.log(productos);

let arrCategorias = ["telefonia", "computacion", "otracosa", "indumentaria"];

aumentadorDePrecios2(productos, arrCategorias, 0.1);

console.log(productos);
