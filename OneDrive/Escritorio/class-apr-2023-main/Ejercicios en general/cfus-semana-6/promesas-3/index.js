
function sumTwoNumbers(num1, num2, delayInMilliseconds) {
    return new Promise((resolve, reject) => {
        if (typeof num1 !== "number" || typeof num2 !== "number") {
            reject("Entrada no valida");
      } else {
        setTimeout(() => {
          const sum = num1 + num2;
          resolve(sum);
        }, delayInMilliseconds);
      }
    });
  }
  
  // Ejemplo de uso
  sumTwoNumbers(5, 10, 2000)
    .then((result) => console.log("La suma es:", result))
    .catch((error) => console.log(error));
  