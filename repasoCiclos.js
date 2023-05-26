
let num = 15 

// par  

console.log( (num % 2) === 0 ) 

// impar
console.log( (num % 2) !== 0 )

function tablaDeMultiplicar(numero) {
 	
    let i = 1
    while( i <= 10){
        console.log(`${numero} * ${i} = ${numero * i}`)
        i++
    }

}
tablaDeMultiplicar(3)

console.log("---------")

//TODO 1) Algoritmo para convertir una cantidad de pesos a dólares.
// la funcion debe recibir la cantidad de pesos y el valor del dolar
console.log("dolaritos")

const conversor = (cantidad, valor)=>{

    return cantidad / valor

}

let cantidadDolares = conversor( 2000, 493 )
console.log(cantidadDolares)






//TODO 2) Algoritmo que calcule el salario de un empleado,
// si se descuenta el 20% de su salario actual.

const calcularSalario = salarioActual => salarioActual * 0.8



//TODO 3) Hacer un programa para calcular el promedio de 3 notas;
// si el promedio es mayor o igual que 7 retornar aprobado, de lo contrario, retornar desaprobado.

const promediar = (n1, n2, n3)=>{

    let sumatoria = n1 + n2 + n3
    let promedio = sumatoria / 3
    
    return promedio >= 7 ? "aprobado" : "desaprobado"
    
    // if( promedio >= 7 ){
    //     return "aprobado"
    // }else{
    //     return "desaprobado"
    // }

}

let situacionFinal = promediar(15, 15, 16)
console.log(situacionFinal)

//TODO 4) Elaborar un programa que simule una clave de acceso.
// Si el usuario es: "ADMIN" y la clave "123456" mostrar el mensaje "ACCESO PERMITIDO".
//  Caso contrario, mostrar el mensaje "ACCESO DENEGADO".


const login = (usuario, contraseña)=>{

    if( usuario === "ADMIN" && contraseña === "123456" ){
        return "ACCESO PERMITIDO"
    }else{
        return "ACCESO DENEGADO"
    }

}
let acceso = login("martin", "123456")
console.log(acceso)


//TODO 5) Elaborar un programa que muestre la cantidad de números pares que hay entre 2 números.

const contarPares = ( n1, n2 )=>{

    if( n1 < 0 || n2 < 0 ){
        return "Lo siento, uno o mas numeros son negativos"
    }
   
    if( n1 % 1 !== 0 || n2 % 1 !== 0 ){
        return "Lo siento, uno o mas numeros no son enteros"
    }

    if(n1 >= n2){   
        return "La operacion no es posible"
    }

    let acc = 0

    for (let i = n1; i <= n2 ; i++) {

        if( i % 2 === 0 ){
            acc += 1
        }
    }

    return acc

}
let cantidadPares = contarPares(4, 4)
console.log(cantidadPares)



//TODO 6) Elaborar un programa que permita ingresar un número entero del 1 al 10
//  y muestre la tabla de multiplicar de dicho número.


// ENTEROS O DECIMALES

// let n = "25"
// console.log( n % 1 )

// console.log( typeof n )