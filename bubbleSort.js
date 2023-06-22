
// ALGORITMO DE ORDENAMIENTO 


//ASCENDENTE o DESCENDENTE
let numeros = [5, 2, 6, 1, 3]; // [ 2, 5, 1, 3, 6 ]

// ESTO NOOOOOOOOO
// console.log( numeros.sort((a,b)=> a - b ))

const bubbleSort = (arreglo)=>{

    let cajaAuxiliar

    for (let i = 0; i < arreglo.length; i++) {
        
        for (let j = 0; j < arreglo.length - 1; j++) {
            if( arreglo[j] < arreglo[j + 1]){
                // ORDENO LOS ELEMENTOS
                cajaAuxiliar = arreglo[j] // 5
                arreglo[j] = arreglo[j + 1] // 2
                arreglo[j + 1] = cajaAuxiliar// 5
            }
        }

    }

}

bubbleSort(numeros)

console.log(numeros)

// ASCENDENTE 
let palabras = ["casa", "abeja", "Zebra", "avion", "#zebra"]

const bubbleSortStrings = (arreglo)=>{

    let cajaAuxiliar

    for (let i = 0; i < arreglo.length; i++) {
        
        for (let j = 0; j < arreglo.length - 1; j++) {
            if( arreglo[j] > arreglo[j + 1]){
                // ORDENO LOS ELEMENTOS
                cajaAuxiliar = arreglo[j] // 5
                arreglo[j] = arreglo[j + 1] // 2
                arreglo[j + 1] = cajaAuxiliar// 5
            }
        }

    }

}

bubbleSortStrings(palabras)
console.log(palabras)


let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      titularCuenta: "Abigael Natte",
      saldoEnPesos: 3,
    },
    {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 1,
        titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 5,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 2,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 4,
      titularCuenta: "Jacki Shurmer",
    },
  ];

 // En base a una propiedad 
 // en base al saldo en forma ascendente
const bubbleObjetos= (arreglo)=>{

    let cajaAuxiliar

    for (let i = 0; i < arreglo.length; i++) {
        
        for (let j = 0; j < arreglo.length - 1; j++) {
            if( arreglo[j].saldoEnPesos > arreglo[j + 1].saldoEnPesos ){
                // ORDENO LOS ELEMENTOS
                cajaAuxiliar = arreglo[j] 
                arreglo[j] = arreglo[j + 1]
                arreglo[j + 1] = cajaAuxiliar
            }
        }

    }

}

bubbleObjetos( arrayCuentas )
console.log(arrayCuentas)



let numeros2 = [5, 2, 6, 1, 3];

// UTILIZANDO EL BUBBLE SORT ORDENAR DE FORMA ASCENDENTE O DESCENDENTE 
// DEPENDIENDO LA INSTRUCCION QUE LLEGA POR PARAMETROS

const ordenar = (arreglo, tipoDeOrdenamiento) => {

    let cajaAuxiliar

    if( tipoDeOrdenamiento === "ASC"){
        for (let i = 0; i < arreglo.length; i++) {
        
            for (let j = 0; j < arreglo.length - 1; j++) {
                if( arreglo[j] > arreglo[j + 1]){
                    // ORDENO LOS ELEMENTOS
                    cajaAuxiliar = arreglo[j] // 5
                    arreglo[j] = arreglo[j + 1] // 2
                    arreglo[j + 1] = cajaAuxiliar// 5
                }
            }
    
        }
    }else if(  tipoDeOrdenamiento ===  "DESC"){
        for (let i = 0; i < arreglo.length; i++) {
        
            for (let j = 0; j < arreglo.length - 1; j++) {
                if( arreglo[j] < arreglo[j + 1]){
                    // ORDENO LOS ELEMENTOS
                    cajaAuxiliar = arreglo[j] // 5
                    arreglo[j] = arreglo[j + 1] // 2
                    arreglo[j + 1] = cajaAuxiliar// 5
                }
            }
    
        }
    }


}

ordenar(numeros2, "DESC")
console.log(numeros2)

// FINAL
// 1 ---> Relacionado con lo de antes del parcial
// 2 ---> de bubble sort 
// 3 ---> 1 o 2 ejercicios de matrices ( 1 de recorrer algo especifico y 2 recorrer toda
// la matriz)
