// let - const

// variables

let nombre = "pepito";

console.log(nombre);

nombre = "juan";

nombre = 22;

console.log(nombre);

const APELLIDO = "Perez";

// apellido = "Gonzalez"

// TIPOS DE DATOS

// string -- cadenada de texto
let nombreDeUsuario = "jorge duje";

// number 
let edad = 30
let precio = 15.5

// booleanos  ---> true / false
let esMayorDeEdad = true

// undefined
let numero = undefined

let numero2 = null

// NAN
console.log( nombreDeUsuario * edad )

console.log("---------------------------------------")
console.log("---------------------------------------")
console.log("---------------------------------------")
// OPERADORES

// matematicos

let n1 = 10
let n2 = 4

console.log( n1 + n2 )
console.log( n1 - n2 )
console.log( n1 * n2 )
console.log( n1 / n2 )

console.log( n1 % n2  )

let nombre1 = "gaston"
let apellido1 = "lopez"

// console.log("hola juancito perez como estas?")
console.log( "Hola " + nombre1 + " " + apellido1 + " como estas?" )

// template literals ---> backticks ``
console.log( `Hola ${nombre1} ${apellido1} como estas? ${ 10 + 20 } `)



// comparacion  ---> que siempre cuando se resuelve la comparacion
//                   me devuelve un booleano

console.log("-----------")
let a = 2
let b = 5

let a_es_mayor = a > b 
let b_es_mayor = a < b 
console.log(a_es_mayor)
console.log(b_es_mayor)


console.log( a <= b)
console.log( a >= b)

console.log("----------")
let c = 12
let d = "12"
// COMPARACION SIMPLE
console.log( c == d )
console.log( c != d )

// COMPARACION ESTRICTA
console.log( c === d)
console.log( c !== d) // ---- c es distinto d

console.log("Logicos")
// logicos

//negacion 

let esMayor = true
console.log(!esMayor) // --- lo contrario a "esMayor"

console.log(esMayor)

let distintoMayor = !esMayor



console.log("-----------")
console.log("-----------")
console.log("-----------")
console.log("-----------")
console.log("-----------")
console.log("-----------")

// && --- || 

// operador and ( && )
// operador or ( || )

let y = 15
let z = 21
let nombree = "pepito"

// --> me devuelve el ultimo truthy o me devuelve el primer falsy
let seCumple = null && 123123 && 0

// el primer truthy --- o el ultimo falsy
let seCumple2 = 0 || null || "" || undefined

// console.log(seCumple)
console.log(seCumple2)

// truthy ---> true , "dasdasda", 1231, []
// falsy ---> false , "", 0, null, undefined

// logged === true
// rol === "ADMIN"

// Pantalla de modificar producto

let isLogged = true
let rol = "pepito"

let tienePermiso = isLogged === true && rol === "ADMIN"

console.log(tienePermiso ? "accede a la pantalla" : "no accede a la pantalla") 


