
// Promesas #2

function delayedLog(time, message) {
  return new Promise((resolve, reject) => {
    if (time < 0) {
      reject("Error: Tiempo no válido");
    } else {
      setTimeout(() => {
        console.log(message);
        resolve();
      }, time * 1000);
    }
  });
}

// Ejemplo de uso
delayedLog(2, "Hola")
  .then(() => delayedLog(3, "Mundo"))
  .catch((error) => console.log(error));
