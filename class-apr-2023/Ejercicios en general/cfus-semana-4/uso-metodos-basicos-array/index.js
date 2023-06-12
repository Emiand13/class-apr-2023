
// Uso de métodos básicos de array.

const favorites = ['javascript', 'html', 'css'];

// Con esta linea de codigo eliminamos el primer elemento del array.
favorites.shift();
console.log(favorites);  // [ "html", "css" ]

// Con esta linea de codigo eliminamos el ultimo elemento del array.
favorites.pop();
console.log(favorites); //  [ "html" ]

// Con esta linea de codigo agregamos "react" al comienzo del array.
favorites.unshift('react');
console.log(favorites); //  [ "react", "html" ]

// Con esta linea de codigo agregamos "react" al final del array.
favorites.push('react');
console.log(favorites); //  [ "react", "html", "react" ]

// Con esta linea de codigo eliminamos el elemento en la posicion 2 y agregamos "express".
favorites.splice(1, 1, 'express');
console.log(favorites);  // [ "react", "express", "react" ]


// Con esta linea de codigo eliminamos los elementos en las posiciones 2 y 3 y agregamos "mongodb".
favorites.splice(1, 2, 'mongodb');
console.log(favorites); // [ "react", "mongodb" ]
