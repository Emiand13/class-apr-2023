
// Trabajando con diferentes ámbitos/alcances


// 1. Declaración de variable global
let x = 10;

// 2. Declaración de función y variable local
function myFunction() {
  let y = 5;
  console.log("Dentro de la función:");
  console.log("x =", x);
  console.log("y =", y);
}

// 3. Impresión de variables dentro de la función
myFunction();

// 4. Impresión de variables en el ámbito global
console.log("En el ámbito global:");
console.log("x =", x);
// console.log("y =", y); --> Esto arrojaría un error, ya que y es una variable local a la función

// 5. Declaración de bloque y variable de ámbito de bloque
{
  let x = 2;
  console.log("Dentro del bloque:");
  console.log("x =", x);
}

// Impresión de variable fuera del bloque
console.log("Fuera del bloque:");
console.log("x =", x);
