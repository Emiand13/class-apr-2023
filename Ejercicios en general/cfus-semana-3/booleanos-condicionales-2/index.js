// Instrucciones
// Usando el conocimiento que has aprendido sobre la lógica booleana, los tipos de datos y la inmutabilidad, escribe un programa que haga lo siguiente:

// 1. Declara una variable llamada num y le asigna el valor de -10.
let num = -10



// 2. Declara una variable llamada isEven y le asigna el valor inicial de false.
let isEven = false;


// 3. Luego, verifica si el valor almacenado en num es par (even) o impar (odd). Si es par, cambia el valor de isEven a true, de lo contrario deja isEven como false.
if (num % 2 === 0){
    isEven = true;
  }


// 4. Declara una variable llamada isPositive y le asigna el valor inicial de false.
let isPositive = false;

 

// 5. Luego, verifica si el valor almacenado en num es un número positivo y cambia el valor de isPositive a true si es un número positivo.
if (num > 0){
    isPositive = true;
  }

// 6. Declara una variable llamada isNegative y le asigna el valor inicial de false.
let isNegative = false;



// 7. Luego, verifica si num es un número negativo (menor que 0) y cambia el valor de isNegative a true si es un número negativo.
if (num < 0){
    isNegative = true;
  }


// 8. Imprime en la consola los valores de isEven, isPositive y isNegative.
console.log(isEven); // verdadero
console.log(isPositive); // falso
console.log(isNegative); // verdadero
