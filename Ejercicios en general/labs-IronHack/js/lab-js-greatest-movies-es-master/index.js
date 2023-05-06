// console.log("hellloooooo");
import datos from './datos.js';

// Función para obtener los directores
function getAllDirectors() {
  // Aquí puedes acceder a los datos de los directores utilizando la variable `datos`
  const directores = datos.directores;
  return directores;
}

// Llamada a la función para obtener los directores
const directors = getAllDirectors();

console.log(directors); // Output: ['StevenSpielberg', 'QuentinTarantino', 'MartinScorsese']
