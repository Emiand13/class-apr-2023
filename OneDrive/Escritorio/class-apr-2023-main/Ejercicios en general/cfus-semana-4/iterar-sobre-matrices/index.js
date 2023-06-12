
// Iterar sobre matrices

const fruits = ["apple", "plum", "strawberries"];

// Usando el bucle for loop:

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }


// Usando el bucle for...of

  for (const elemOfArr of fruits) {
    console.log(elemOfArr);
  }

// Usando el bucle .forEach()


  fruits.forEach(function (elem, index) {
    console.log(`${elem} ${index}`);
  });
   