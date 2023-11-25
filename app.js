// Funciones que queremos probar
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

// Función para actualizar el contenido de la página (solo para el navegador)
function actualizarPagina() {
  const resultado = sumar(5, 3); // Puedes cambiar los valores según sea necesario
  document.getElementById("app").innerText = `El resultado es: ${resultado}`;
}

// Exportar las funciones para que puedan ser probadas
module.exports = {
  sumar,
  restar,
  dividir,
  actualizarPagina,
};
