

// declaradas vs expresadas (anonimas) ( 2 )


// crear la funcion ---> declarar la funcion

let resultado = sumar()

function sumar(){
    // bloque de codigo
    let n1 = 2
    let n2 = 5
    console.log("hola")
    return n1 + n2
}


// Ejecutamos la funcion y guardamos el retorno en una variable

// vemos el resultado de lo que se guardo en esa variable
console.log(resultado)

function login (){
    let userName = "pepito@gmail.com"
    // preguntarle al backend si existe
    // si existe ---> navega a la pantalla del home
}
// en este caso, como la funcion no retorna nada, solo se ejecuta y nada mas
login()

// expresadas ---> anonimas
// expresada comun 
let restar = function (){
    return 2 - 1
}

console.log( restar() ) //---> no se hace asi


let resultadoResta = restar()
console.log(resultadoResta)

let resultadoResta2 = restar()
console.log(resultadoResta2)


// hoisting ---> lee primero todas la funciones declaradas o variables con var 

let edad = 2
console.log(edad)


// expresada flecha ---> arrow function 
let multiplicar = ()=>{
    return 2 * 5
}

let resMulti = multiplicar()
console.log(resMulti)

//


let sumar2 = ( numero1, numero2 )=>{
    let frase = "hola como estas"
    return numero1 + numero2 
}

let sumar3 = (numero1, numero2)=>{

    let frase = "hola bien vos?"

}


let res = sumar2( 1, 2, 3, 4)
console.log(res)

let res2 = sumar2( 11, 15 )
console.log(res2)

// scope 

let nombreUsuario = "maria"


// siempre las funciones son con " const "
// nunca vamos a re - asignar su valor , simplemente las ejecutamos!

const saludar = ( )=>{
    let nombreUsuario = "carmen"
    return nombreUsuario
}

let resNombre = saludar()
console.log(resNombre)

