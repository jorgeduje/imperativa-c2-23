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
  consultarCliente: function (nombre) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titularCuenta === nombre) {
        return this.clientes[i];
      }
    }

    return "El cliente no fue encontrado";
  },
  deposito: function (nombre, cantidad) {
    let clienteEncontrado = this.consultarCliente(nombre);

    if (typeof clienteEncontrado !== "object") {
      return clienteEncontrado;
    }
    clienteEncontrado.saldoEnPesos += cantidad;
    return (
      "Depósito realizado, su nuevo saldo es: " + clienteEncontrado.saldoEnPesos
    );
  },
  extraccion: function (nombre, cantidad) {
    let clienteEncontrado = this.consultarCliente(nombre);
    if (clienteEncontrado.saldoEnPesos >= cantidad) {
      clienteEncontrado.saldoEnPesos -= cantidad;
      return (
        "extraccion realizada, su nuevo saldo es: " +
        clienteEncontrado.saldoEnPesos
      );
    } else {
      return "Lo siento, saldo insuficiente!";
    }
  },
};

let clienteEncontrado = banco.consultarCliente("carlos");

console.log(clienteEncontrado);

banco.deposito("pepito", 10000);

console.log("-----------");
console.log("-----------");
console.log("-----------");

console.log(banco.consultarCliente("Ramon Connell"));

let resultadoTransaccion = banco.deposito("Ramon Connell", 20000);
console.log(resultadoTransaccion);

console.log(banco.consultarCliente("Ramon Connell"));

let resultadoExtraccion = banco.extraccion("Ramon Connell", 30000);
console.log(resultadoExtraccion);

console.log(banco.consultarCliente("Ramon Connell"));

// let a = {};
// let b = "das";

// console.log(typeof a);
// console.log(typeof b);

let resultado = banco.deposito("perro", 1000)
console.log(resultado)