console.log("Funcionando...");

let contenedorCategorias = document.querySelector("ul");
console.log(contenedorCategorias);

let items = document.querySelectorAll("li");
console.log(items);

let title = document.getElementById("title");
console.log(title);

setTimeout(() => {
  title.textContent = "soy un nuevo titulo";
}, 5000);

setTimeout(() => {
  contenedorCategorias.innerHTML = "<div>Hola como estas</div>";
}, 5000);

let botonSumar = document.getElementById("btn-sumar");

botonSumar.addEventListener("click", () => {
  console.log("se disparo el evento");
});

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

let containerCuentas = document.getElementById("container-tarjetas");
let botonCuentas = document.getElementById("btn-cuentas");

botonCuentas.addEventListener("click", () => {
  let arrayTarjetas = arrayCuentas.map((elemento) => {
    return `<div class="tarjetas">
        <h2>${elemento.titularCuenta}</h2>
        <h2>${elemento.saldoEnPesos}</h2>
        <h2>${elemento.nroCuenta}</h2>
        </div>`;
  });
  containerCuentas.innerHTML = arrayTarjetas.join("");
});


