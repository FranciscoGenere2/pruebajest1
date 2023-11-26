// Importar las funciones que queremos probar
const { sumar, restar, dividir } = require("../app");

// Prueba para la función de suma
test("sumar 5 + 3 es igual a 8", () => {
  expect(sumar(5, 3)).toBe(10);
});

// Prueba para la función de resta
test("restar 5 - 3 es igual a 2", () => {
  expect(restar(5, 3)).toBe(2);
});

// Prueba para la función de división
test("dividir 6 por 2 es igual a 3", () => {
  expect(dividir(6, 2)).toBe(3);
});

// Prueba para la división por cero
test("dividir por cero arroja un error", () => {
  expect(() => dividir(6, 0)).toThrow("No se puede dividir por cero");
});
