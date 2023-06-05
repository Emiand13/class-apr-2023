
// setInterval #2



function countdown(duration) {
    if (isNaN(duration)) {
      return console.log(
        "Error: Not a number. Entrada inválida, por favor proporcione un valor numérico."
      );
    }
   
    if (duration < 1) {
      return console.log("Error: Por favor, proporcione un número mayor que cero.");
    }
   
    let timer = duration;
   
    const intervalId = setInterval(() => {
      console.log(timer);
      timer--;
   
      if (timer === 0) {
        clearInterval(intervalId);
        console.log("¡Se acabó el tiempo!.");
      }
    }, 1000);
  }
  countdown(10);