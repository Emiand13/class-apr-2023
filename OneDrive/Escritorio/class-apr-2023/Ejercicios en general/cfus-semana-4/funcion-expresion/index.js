

// EJERCICIO 1

// 1.Creamos la expresión de función printMessage.
const printMessage1 = function() {
    console.log("Soy una expresión de función");
  };
  
  //2. Creamos la función useFuncExpression que toma una función callback y la ejecuta.
  const useFuncExpression1 = function(callback) {
    console.log("I am a function expression");
    callback(); // Invocamos la función callback
  };
  
  // Llamar a la función useFuncExpression pasando printMessage como argumento
  useFuncExpression(printMessage);
  


//3. BONUS

// Creamos la expresión de función printMessage
const printMessage = () => {
    console.log("Soy una expresión de función");
  };
  
  // Crear la función useFuncExpression que toma una función callback y la ejecuta
  const useFuncExpression = (callback) => {
    console.log("I am a function expression");
    callback(); // Invocar la función callback
  };
  
  // Llamar a la función useFuncExpression pasando printMessage como argumento
  useFuncExpression(printMessage);
  

