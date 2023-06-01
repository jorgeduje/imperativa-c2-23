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

let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];


  let banco = {
    clientes: arrayCuentas,
    consultarCliente: function(nombre){

        for( let i = 0; i < this.clientes.length; i++ ){
            if(this.clientes[i].titularCuenta === nombre){
                return this.clientes[i]
            }
        }

    }
  }

  console.log(banco.clientes)
  console.log("-----------")
  console.log(banco.consultarCliente("Jacki Shurmer"))
