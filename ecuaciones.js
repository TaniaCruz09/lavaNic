const btnIncrementador = document.getElementById("btnIncrementadorId");
const btnResta = document.getElementById("btnRestaId");
const btnIncrementar2 = document.getElementById("btnIncrementa2Id");
const btnResta2 = document.getElementById("btnResta2Id");
const btnIncrementar3 = document.getElementById("btnIncrementa3Id");
const btnResta3 = document.getElementById("btnResta3Id");
const btnConfirmar =document.getElementById("confirmar")
const mensajeResultado = document.getElementById("mensajeId");

let resultado = 0;
const falda = 10;
const alfombras = 50;
const pantalones = 30;

let tipoBoton = ""; // Variable para almacenar el tipo de botón presionado

const incrementar = (valor) => {
  resultado += valor;
  mostrarResultado();
};

const restar = (valor) => {
    if (tipoBoton === "falda" && valor != "falda" ) {
        resultado -= valor;
      } else if (tipoBoton === "alfombras" && resultado === alfombras && valor <= resultado) {
        resultado -= valor;
      } else if (tipoBoton === "pantalones" && resultado === pantalones && valor === resultado) {
        resultado -= valor;
      }
  mostrarResultado();
};

const mostrarResultado = () => {
  mensajeResultado.textContent = `C$ ${resultado}`;
};

btnIncrementador.addEventListener("click", () => {
  tipoBoton = "falda";
  incrementar(falda);
});
btnResta.addEventListener("click", () => {
  tipoBoton = "falda";
  restar(falda);
});
btnIncrementar2.addEventListener("click", () => {
  tipoBoton = "alfombras";
  incrementar(alfombras);
});
btnResta2.addEventListener("click", () => {
  tipoBoton = "alfombras";
  restar(alfombras);
});

btnIncrementar3.addEventListener("click", () => {
    tipoBoton = "pantalones";
    incrementar(pantalones);
  });
  btnResta3.addEventListener("click", () => {
    tipoBoton = "pantalones";
    restar(pantalones);
  });
