
// función que toma 3 números como parámetros y devuelve su suma

function sumThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}
 
console.log(sumThreeNumbers(5, 10, 5)); // 20
 
// función que acepta una cadena como parámetro y verifica si la cadena tiene un número par o impar de letras

function isStringOddOrEven(name) {
    if (name.length % 2) {
      return `${name} tiene un número impar de letras.`;
    } else {
      return `${name} tiene un número par de letras.`;
    }
  }
  
  console.log(isStringOddOrEven("Emilio"));
  // La cadena Emilio tiene un número par de letras.
  
  console.log(isStringOddOrEven("Facundo"));
  // La cadena Facundo tiene un número impar de letras.
  
