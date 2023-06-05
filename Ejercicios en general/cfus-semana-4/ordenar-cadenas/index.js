
// EJERCICIO 1# Ordenar cadenas

const arrOfStrings = ["cat", "wolf", "is", "animal"];
console.log(arrOfStrings);

// 1.Crea una copia del arreglo arrOfStrings y nómbrala strings1.

const strings1 = [...arrOfStrings];
console.log(strings1);


// 2.Ordena el arreglo strings1 desde la cadena más corta hasta la más larga.

strings1.sort((a, b) => {
    return a.length - b.length;
  });
  console.log(strings1); // [ 'is', 'cat', 'wolf', 'animal' ]


// 3.Crea otra copia del arreglo arrOfStrings y nómbrala strings2. 

const strings2 = arrOfStrings.slice();
console.log(strings2);


// 4.Ordena el arreglo strings2 alfabéticamente.

strings2.sort(function(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  console.log(strings2); //  ['animal', 'cat', 'is', 'wolf']


// EJERCICIO 2# sort numbers

// En esta linea de codigo se define un array lllamdo "numbers" que contiene una lista de numeros desordenados.
const numbers = [2, 5, 9, 7, 1, 8, 4, 3, 6];

// En esta linea de codigo se declara la funcion "sortNumbers" que acepta un parametro "arr" para representar un array.
const sortNumbers = (arr) => {
  
// En esta linea de codigo creamos una copia del array original utilizando "arr.silce()" y la copia se almacena en la variable "arrayCopy".
const arrayCopy = arr.slice();
    
// En esta linea de codigo llamamos al metodo "sort" en arrayCopy para ordenar los elementos del array con la funcion de comparacion "(a, b) => a - b" como argumento para ordenarlos de forma ascendente.
arrayCopy.sort((a, b) => a - b);

// En esta linea de codigo se devuelve "arrayCopy" ya ordenada y lo imprimimos en la console.
    
    return arrayCopy;
  }

console.log(sortNumbers(numbers));

// EJERCICIO 3# Reverse strings

const name = "ivan";
const reversedName = name.split("").reverse().join("");

console.log(reversedName);



// EJERCICIO 3.1# Reverse numbers

const numeros = [3, 5, 6, 2];

// En estas lineas de codigo copiamos y revertimos el array numeros.
const reversed = numeros.slice().reverse();
 
console.log(reversed); // [ 2, 6, 5, 3 ]
console.log(numeros); 


// En esta linea de codigo copiamos e ordenamos el array numeros y luego lo revertimos.

const sortReversed = numeros.slice().sort().reverse();
 
console.log(sortReversed); // [ 6, 5, 3, 2 ]
console.log(numeros); 