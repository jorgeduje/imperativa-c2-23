

let mat = [
  [1, 2, 3], // filas 0
  [1, 5, 4], // filas 1
  [6, 4, 5], // filas 2
];

// mat[2][0]
// mat[2][1]
// mat[2][2]
// mat[2][3]
// mat[2][4]

// recorrer una fila determina 

// recorrer fila 2

const recorrerFila = ( matriz, numFila)=>{

    let acc = 0
    for (let i = 0; i < matriz[numFila].length; i++) {
        acc += matriz[numFila][i] 
    }
    return acc

}

let resultadoFilaUno = recorrerFila(mat, 1)
console.log(resultadoFilaUno)


let mat2 = [
    [1, 2, 3], // filas 0
    [1, 5, 4], // filas 1
    [6, 4, 5], // filas 2
];

// mat2[0][0]
// mat2[1][0]
// mat2[2][0]


// recorrer una columna

const recorrerCol = (matrix, numCol)=>{

    // let acc = 0
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][numCol] = 0
    }
    // return acc

}

recorrerCol(mat2, 0)

console.table(mat2)



// let mat2 = [
//     [1, 2, 3], // filas 0
//     [1, 5, 4], // filas 1
//     [6, 4, 5], // filas 2
// ];


// Recorrer matriz completa



// mat3[0][0]
// mat3[0][1]
// mat3[0][2]

// mat3[1][0]
// mat3[1][1]
// mat3[1][2]


// crear una matriz de 2 x 5
let mat3 = [
    [1, 2, 3], // filas 0
    [1, 5, 4], // filas 1
    [6, 4, 5], // filas 2
    [3, 1, 7], // filas 3
];

const recorrerMatCompleta = ()=>{

    for(let i = 0; i < mat3.length; i++){
        console.log("estoy recorriendo la fila: " + i )
        
        for(let j = 0; j < mat3[i].length; j++ ){ 

            console.log("estoy recorriendo la columna: " + j + " de la fila " + i)
            
        }
        

    }

}
recorrerMatCompleta()

// matriz de 3 x 3
let matrix = [
    [1, 2, 3], // filas 0
    [1, 5, 4], // filas 1
    [6, 4], // filas 2
];

// recorrer la diagonal principal y la secundaria


// principal 
matrix[0][0]
matrix[1][1]
matrix[2][2]

// secundaria
matrix[0][2]
matrix[1][1]
matrix[2][0]

// bug

let matrizUnMillon = [
    [1, 2, 3], 
    [1, 5], 
    [6, 4, 5], 
];

const sumarColDos =()=>{

    let acc = 0
    for (let i = 0; i < matrizUnMillon.length; i++) {
        console.log(typeof matrizUnMillon[i][2])
        if(typeof matrizUnMillon[i][2] === "number" ){
            acc += matrizUnMillon[i][2]
        }
    }
    return acc
}

let a = sumarColDos()
console.log(a)

let b = 123

let x = b.toString()
console.log(x)
let z = x.split("")
console.log(z)
let y = z.reverse()
console.log(y)
let nose = y.join("")
console.log(nose)
let noseFinal = +nose
console.log(noseFinal)

let u = "123151234"
console.log(u)
console.log(+u)