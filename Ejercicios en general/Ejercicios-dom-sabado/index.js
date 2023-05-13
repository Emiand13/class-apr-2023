console.log("holaaaaaa boton");



// Ejercicio numero 1 // Ejercicio 1. Cambio de innerText.
// Creamos un <h1> con un texto de "Todavía no me han modificado". Debajo creamos un botón que contenga el texto que queráis ("Click me", por ejemplo).
// Después tendremos que generar un evento de click. Cuando el user clique el botón, lo que haremos es que vamos a modificar el texto del <h1> de tal manera que sea "Ya me han dado click!".


const boton1 = document.querySelector('#miBoton');
const h1 = document.querySelector('#miH1');
let modificado = false;

boton1.addEventListener('click', function() {
  if (modificado) {
    h1.innerText = 'Todavía no me han modificado';
    boton1.style.backgroundColor = 'white'; 
    boton1.style.fontSize = '32px';
    boton1.style.borderRadius = '8px';
    
    modificado = false;
  } else {
    h1.innerText = 'Ya me han dado click!';
    boton1.style.backgroundColor = 'red';
    boton1.style.fontSize = '32px';
    modificado = true;
  }
});


// Ejercicio 2. Toggle.
// Imaginemos que tenemos un pequeño aparato que se puede encender y apagar con un botón.
// Vamos a crear un <h1> que contendrá el texto "OFF". Debajo colocaremos un botón que contenga el texto "encender". De momento nuestro aparato está apagado.
// A continuación vamos a crear un event listener de click, de tal manera que, cuando el user lo clique, cambie el texto de 'OFF' a 'ON' y el texto del botón de 'encender' a 'apagar'. Esto nos permitiría encender nuestro aparato imaginario, pero también deberemos asegurarnos que, con el mismo evento de click, podemos apagarlo (es decir, volver a setear el valor del <h1> a 'OFF' y el del botón a 'encender').

// Este no lo e conseguido sacar con el toogle

const estado = document.querySelector('#estado');
const boton2 = document.querySelector('#boton2');

boton2.addEventListener('click', function() {
  if (estado.innerText === 'OFF') {
    estado.innerText = 'ON';
    boton2.innerText = 'Apagar';
    boton2.style.backgroundColor = 'red';
  } else {
    estado.innerText = 'OFF';
    boton2.innerText = 'Encender';
    boton2.style.backgroundColor = 'green';

  }
});


// Ejercicio 3. Contador.
// Vamos a crear un pequeño contador que sume y reste valores. Primero crearemos un <h1> con un valor inicial de '0'. Después crearemos CUATRO botones: el primero será "Doble click -2", el segundo "Click -1", el tercero "Click +1" y el cuarto "Doble click +2".
// Lo que queremos de estos cuatro botones es que modifiquen el valor del <h1> según como se especifica. Es decir, tendremos dos botones con un evento de doble click que restaran y sumarán 2 al resultado del <h1>, así como otros dos botones con un evento de click que sumarán y restarán 1 al resultado.
// HINT: Recordad que todos los valores dentro de un tag de HTML son cadenas de texto.

const contador = document.querySelector('#contador');
const restarDoble = document.querySelector('#restar-doble');
const restar = document.querySelector('#restar');
const sumar = document.querySelector('#sumar');
const sumarDoble = document.querySelector('#sumar-doble');

contador.innerText = '0';

restarDoble.addEventListener('dblclick', function() {
  let valor = parseInt(contador.innerText) - 2;
  contador.innerText = valor.toString();
});

restar.addEventListener('click', function() {
  let valor = parseInt(contador.innerText) - 1;
  contador.innerText = valor.toString();
});

sumar.addEventListener('click', function() {
  let valor = parseInt(contador.innerText) + 1;
  contador.innerText = valor.toString();
});

sumarDoble.addEventListener('dblclick', function() {
  let valor = parseInt(contador.innerText) + 2;
  contador.innerText = valor.toString();
});


// Ejercicio 4. Class Toggle
// Creamos un botón que tenga una clase "green" y un texto como 'I'm green'.
// Cuando el user dé click al botón, deberíamos cambiar el texto del botón por 'I'm red' y su color para que sea rojo.
// Cuando el botón sea rojo y el user le vuelva a dar, deberíamos volver a setearlo a su estado inicial.

const button = document.getElementById('myButton');

// En esta linea de codigo agregamos un "escucha de eventos" (eventListener) a un boton de HTML y cambiamos su estado visual y su texto c uando hacemos click en el y y ejecuta el código dentro de la función anónima.
button.addEventListener('click', function() {

// La función anónima, this se refiere al botón que se hizo clic. Luego, la función usa el método classList.toggle() para alternar las clases 'green' y 'red' en el botón, lo que cambia el color de fondo del botón.

this.classList.toggle('green');
this.classList.toggle('red');

// Luego, la función usa una declaración if...else para cambiar el texto dentro del botón según su estado actual. Si el botón tiene la clase 'green', entonces el texto se establece en "I'm green", de lo contrario, se establece en "I'm red".
// En resumen, el código hace que el botón cambie de color y texto cada vez que se hace clic en él, alternando entre los estados 'verde' y 'rojo'.
  if (this.classList.contains('green')) {
    this.textContent = "I'm green";

  } else {
    this.textContent = "I'm red";
  }
});






// PREGUNTAS: En el ejercicio del contador se puede poner un limite de conteo osea que solo llegue a 100 por ejemplo.







