// let numeros = [1,2, 3, 10]
// console.log(numeros[3] )

let registrarme = function () {
  return "estoy registrandome!";
};

// pares de clave : valor
let usuario = {
  nombre: "maria",
  apellido: "perez",
  edad: 22,
  esCasado: false,
  login: function ( numero) {
    return "Estoy haciendo login! " + numero;
  },
  register: registrarme,
  saludar: function (){
    return `Hola soy ${this.nombre} ${this.apellido} ${this.dni}`
  },
  numerosDeLaSuerte: [1, 2, 3],
  direccion: { calle: "españa", numero: 12},

};

// let persona = {
//     name: "dasda"
// }

// let user = {}
// user = persona


// const numeros = [ 1, 2 ]
// // numeros = []
// numeros.push(15)
// console.log(numeros)
console.log(usuario.nombre);
// console.log(usuario.esCasado);
// console.log(usuario.login(520));
// console.log(usuario.saludar());

usuario.nombre = `${usuario.nombre} carmen`
usuario.direccion.calle = "argentina"

const agregarDni = ()=>{
    usuario.dni = 541235121
}

agregarDni()


console.log(usuario)

delete usuario.esCasado


console.log(usuario)
console.log(usuario.saludar())

// console.log(usuario.nombre)

// console.log(usuario.direccion.calle)


// let numeros = [1, 2, 3, 10]
// numeros.length
// numeros.push()



let perro = {
  nombre: "Jack",
  color: "Blanco",
  edad: 3
}

console.log("--------")
console.log("--------")
console.log(perro.color)
console.log(perro["color"])



const mostrarPropiedad = ( prop )=>{

  return perro[prop]
}

let propiedad = mostrarPropiedad("edad")
console.log(propiedad)