const triple = (num) => num * 3;
let res = triple(2);
console.log(res);

const multi = (a, b) => a * b;
let res2 = multi(2, 3);
console.log(res2);

let turista = {
  nombre: "juana",
  apellido: "perez",
  temperatura: 36,
};

const puedePasar = (obj) => {
  if (obj.temperatura < 37) {
    return "puede pasar";
  } else{
    return "no puede pasar";
  }
};

let res3 = puedePasar(turista);
console.log(res3);

let paises = [
  {
    cantidadDeVisitas: 3,
    clima: "soleado",
    habitantes: "212 millones",
  },
  {
    cantidadDeVisitas: 4,
    clima: "frío",
    habitantes: "144 millones",
  },
  {
    cantidadDeVisitas: 1,
    clima: "nublado",
    habitantes: "329 millones",
  },
];

const siguienteViaje = arr =>{

    for (let i = 0; i < arr.length; i++) {
        arr[i].cantidadDeVisitas += 1
    }

}

console.log(paises)
siguienteViaje(paises)
console.log(paises)


// ENCONTRAR EL MENOR

let arr = [5, 41,  65, 8]

console.log(Math.min(...arr))
console.log(Math.max(...arr))



const encontrarMenor = array => {

    let menor = array[0]; // 5 - 2 - 1

    for (let i = 1; i < array.length; i++) {
        if(menor > array[i]){
            menor  = array[i]
        }        
    }

    return menor

}

let menor = encontrarMenor(arr)
console.log(menor)


let arr2 = [5, 41, 51, 66, 65, 8]
const encontrarMayor = array => {

    let mayor = array[0]; // 5

    for (let i = 1; i < array.length; i++) {
        if(mayor < array[i]){
            mayor  = array[i]
        }        
    }

    return mayor

}

let mayor = encontrarMayor(arr2)
console.log(mayor)

// una funcion que reciba 2 numeros y devuelva el mayor
// si son iguales que devuelva cualquiera de los 2

const devolverMayor = (n1, n2)=>{

    if(n1 >= n2){
        return n1
    }else{
        return n2
    }

}

let resultado = devolverMayor( 11, 11)
console.log(resultado)

let a = [15 , 51, 65, 11]

let elMayorDeCuatro = devolverMayor( devolverMayor(15, 51), devolverMayor(65,11) )
console.log(elMayorDeCuatro)

const mayorA = (arr)=>{

    let acc = arr[0]

    for (let i = 1; i < arr.length; i++) {
        acc = devolverMayor(acc, arr[i])
    }

    return acc

}

let resAcc = mayorA(a)
console.log(resAcc)

let numero = 2.2

console.log( Math.floor(numero) ) // ---> 2
console.log( Math.ceil(numero) ) // ---> 3
console.log( Math.round(numero) ) // ---> 2 / 3

console.log( Math.round( Math.random() * 100 ))

