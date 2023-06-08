
// Callbacks


// En esta linea de codigo la función "processArray" aplica la función "callback" a cada elemento del "array" utilizando el método "map"(), y devuelve un nuevo "array" con los resultados de la aplicación de la función "callback" a cada elemento.
function processArray(arr, callback) {
    return arr.map(callback);
  }
   
// En esta linea de codigo función toma un número, le suma 2 y devuelve el resultado. Por ejemplo, si se llama la función con el número 3, el resultado sería 5:
function addTwo(num) {
    return num + 2;
  }
   
// En esta linea de codigo la función "processArray" se utiliza para aplicar una función a cada elemento de un [Array], y devolver un nuevo [Array] con los resultados de aplicar la función a cada elemento. En este caso, se utilizó la función "addTwo" para sumar 2 a cada elemento del "Array" nums y lo que hace es sumarle 2 a cada uno de los numeros que estan dentro del array y luego nos devuelve en la console el resultado que seria: 1+2=3 , 2+2=4, 3+2=5 y 4+2=6  oleeeee!!!

const nums = [1, 2, 3, 4];
console.log(processArray(nums, addTwo));