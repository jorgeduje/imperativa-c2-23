
// ANCHOR ---> Array == Arreglo == Coleccion 


// let n1 = 15
// let n2 = 12
// let n3 = 29
let n4 = 32
console.log(n4)

let numerosDeLaSuerte = [15, 12, 29, 32]

console.log(numerosDeLaSuerte)
console.log( numerosDeLaSuerte[2] )

let palabras = ["casa", "avion", "abeja", "perro"]
console.log( palabras[3] )

console.log( palabras[7] )

console.log("holaa")

let nombre = "pepito"
console.log( nombre[0] )


console.log( palabras.length )
console.log( nombre.length )




let numerosDeLaSuerte2 = [15, 12, 29, 32]
let nombre2 = "pepito"

// ME DEVUELVE EL INDICE o -1 si no lo encuentra
console.log(numerosDeLaSuerte2.indexOf( 29 ))
console.log(nombre2.indexOf( "x" ))

console.log( numerosDeLaSuerte2.includes(13) )
console.log( nombre2.includes("j") )

let comentarioCortado = nombre2.slice( 3, 5 ) 

console.log(nombre2)

let frase = "hola como estas"

let arrayFrase = frase.split("o")
console.log(arrayFrase)

let numeros = [ 1, 2, 5 ]
// numeros[3] = 20
numeros.push( 17, 19, 51 )
let x = numeros.pop()
console.log(x)

console.log(numeros)


let arr = [1, 2, 3]
// invertir el array

let arrInvertido = [] // [3, 2, 1]

arrInvertido.push( arr.pop() )
arrInvertido.push( arr.pop() )
arrInvertido.push( arr.pop() )

console.log(arrInvertido)


let notasPepe = [10, 8, 9, 9, 9, 5, 4, 3]
let notasMaria = [ 6,8]

console.log(notasPepe[0])
console.log(notasPepe[notasPepe.length - 1])



const promediar = ( notas )=>{

    let acc = 0
    // RECORRER EL ARRAY
    for( let i = 0 ; i < notas.length ; i++ ){
        
        acc += notas[i]
    }

    return acc / notas.length

}

let promedioPepe = promediar(notasPepe)
console.log(promedioPepe)

let promedioMaria = promediar(notasMaria)
console.log(promedioMaria)














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
