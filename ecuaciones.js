function calcularTotal() {
  // Obtener los valores de los campos de entrada
  let cantidadFaldas =
    parseInt(document.getElementById("cantidad-faldas").value) || 0;
  let cantidadAlfombras =
    parseInt(document.getElementById("cantidad-alfombras").value) || 0;
  let cantidadPantalones =
    parseInt(document.getElementById("cantidad-pantalones").value) || 0;

  // Calcular el subtotal
  let subtotal =
    cantidadFaldas * 10 + cantidadAlfombras * 50 + cantidadPantalones * 30;

  // Calcular el IVA y el costo de envío
  let iva = subtotal * 0.01;
  let costoEnvio = 20;

  // Calcular el total a pagar
  let total = subtotal + iva + costoEnvio;

  if (total <= 100) {
    document.getElementById("total").textContent =
      "Lo sentimos tu total de: " +
      total.toFixed(2) +
      "  " +
      "No cumple con la cantidad minima para procesar tu pedido";
  } else {
    document.getElementById("total").textContent = "C$" + total.toFixed(2);
  }
}
