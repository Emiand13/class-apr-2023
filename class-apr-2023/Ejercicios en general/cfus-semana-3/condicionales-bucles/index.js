// Instrucciones
// ¡Vamos a escribir una versión mejorada del programa “Hello, world!” (“Hola, mundo!”)! Escribe el programa que le pregunta al usuario por su nombre y en qué idioma quiere ver el mensaje.

// Debe tener al menos tres idiomas diferentes (por ejemplo: español, francés e inglés).

// Si el usuario quiere el mensaje en español, debes imprimir en la consola “¡Hola, usuario!” donde usuario es un marcador de posición para el nombre que el usuario ingresó. Por ejemplo, si el nombre del usuario es Mario, entonces en la consola obtendrías “¡Hola, Mario!”
// Si el usuario quiere el mensaje en francés, debes imprimir en la consola “Salut, usuario!” donde usuario es un marcador de posición para el nombre que el usuario ingresó.
// Si el usuario quiere el mensaje en inglés, debes imprimir en la consola “¡Hola, usuario!” donde usuario es un marcador de posición para el nombre que el usuario ingresó.
// Finalmente, si no tenemos el idioma indicado, mostraremos un mensaje “¡No estoy seguro de qué idioma es ese! ¡Lo siento!”.
// Usa las declaraciones if, else if y else que acabamos de aprender.


const language = prompt(
    "Please enter the language - (options: Spanish, French, English): "
  );
  const name = prompt("Please enter your name: ");
   
  if (language === "Spanish") {
    console.log(`Hola, ${name}`);
  } else if (language === "French") {
    console.log(`Salut, ${name}`);
  } else if (language === "English") {
    console.log(`Hello, ${name}`);
  } else {
    console.log("I am not sure which language that is! Sorry!");
  }
  