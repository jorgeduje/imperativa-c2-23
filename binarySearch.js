
// ANCHOR ---> Algoritmo Binary search 

let numeros = [ 1, 3, 12, 15, 22 ]

// ENCONTRAR EL NUMERO 15 Y DEVOLVER SU POSICION 
// BUSQUEDA LINEAL 
const encontrar = (arr, buscado )=>{

    for (let i = 0; i < arr.length; i++) {
        if( arr[i] === buscado ){
            return i
        }
    }

}

let res = encontrar(numeros, 55)
console.log(res)

// BUSQUEDA BINARIA // 14
let numeros2 = [ 1, 3, 12, 13, 15, 22 ] 

const binarySearch = (arr, buscado)=>{

    let izq = 0 // 4
    let der = arr.length - 1 // 3
    let posicionMedio = undefined
    let encontrado = undefined

    while( izq <= der ){

        posicionMedio = Math.floor( (izq + der) / 2 ) // 3
        encontrado = arr[posicionMedio] // 13
    
        if( encontrado === buscado ){
            return posicionMedio
        }

        if(encontrado > buscado ){
            der = posicionMedio - 1
        }else{
            izq = posicionMedio + 1
        }

    }

    

    return "no se encontro"

}

binarySearch( numeros2, 14 )



let arrayCuentas = [
    {
      nroCuenta: 1,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 2,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 7,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 9,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 15,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];

  const binarySearch2 = (arr, buscado)=>{

    let izq = 0 
    let der = arr.length - 1 
    let posicionMedio = undefined
    let encontrado = undefined

    while( izq <= der ){

        posicionMedio = Math.floor( (izq + der) / 2 ) 
        encontrado = arr[posicionMedio] 
    
        if( encontrado.nroCuenta === buscado ){
            return {cuenta: encontrado, posicion: posicionMedio}
        }

        if(encontrado.nroCuenta > buscado ){
            der = posicionMedio - 1
        }else{
            izq = posicionMedio + 1
        }

    }

    

    return "no se encontro"

}

let cuentaEncontrada = binarySearch2( arrayCuentas, 9 )
console.log(cuentaEncontrada)