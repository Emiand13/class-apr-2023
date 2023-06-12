
// Se crea una nueva instancia del objeto Chronometer utilizando la sintaxis "new Chronometer()". Esto significa que estamos creando un objeto llamado "chronometer" basado en la clase "Chronometer". El objeto "chronometer" nos permitirá realizar operaciones relacionadas con el cronómetro, como establecer y obtener el tiempo.
let chronometer = new Chronometer();


// Se obtienen referencias a varios elementos HTML utilizando sus identificadores. Por ejemplo, "btnLeft" se refiere a un botón con el identificador "btnLeft" en el HTML, y "minDec" se refiere a un elemento con el identificador "minDec". Estas referencias se utilizan para interactuar con los elementos HTML desde JavaScript, como modificar su contenido o escuchar eventos.
let btnLeft     = document.getElementById('btnLeft');
let btnRight    = document.getElementById('btnRight');
let minDec      = document.getElementById('minDec');
let minUni      = document.getElementById('minUni');
let secDec      = document.getElementById('secDec');
let secUni      = document.getElementById('secUni');
let milDec      = document.getElementById('milDec');
let milUni      = document.getElementById('milUni');
let splits      = document.getElementById('splits');
let splitsCont  = document.getElementById('splits-container');
// let intervalDom = 0;
// let intervalCount = 0;

// Se declara la variable llamada "time", que inicialmente se establece en 0. Esta variable se utilizará para almacenar y manipular el tiempo del cronómetro.
let time = 0;



// Se define una función llamada "printTime". Esto significa que vamos a escribir un conjunto de instrucciones que se ejecutarán cuando llamemos a esta función más adelante.
function printTime() {
  // intervalDom = setInterval(()=>{


  // Aquí, estamos utilizando una función llamada "setTime" que pertenece a algo llamado "chronometer" para obtener la hora actual. La hora actual se guarda en la variable llamada "time".
    time = chronometer.setTime()
    // if(intervalCount%100==0){

    // Después, vemos algunas líneas que dicen "printMinutes(time[0])", "printSeconds(time[1])" y "printMilliseconds(time[2])". Estas líneas llaman a otras funciones llamadas "printMinutes", "printSeconds" y "printMilliseconds" respectivamente, y les pasan los valores correspondientes de la variable "time". Esto es como decirle a esas funciones que muestren en la pantalla los minutos, segundos y milisegundos que obtuvimos de la hora actual.

    // Y eso es todo para la función "printTime". Ahora, cuando llamemos a esta función, ejecutará todas esas instrucciones en orden.

    printMinutes(time[0]);
    printSeconds(time[1]);
    // }
    printMilliseconds(time[2]);
    // intervalCount++;
  // },10)
}

// Se define una función llamada "printMinutes" que acepta un parámetro llamado "minutes". Esto significa que cuando llamemos a esta función, podemos pasarle un valor para "minutes" que se utilizará dentro de la función.

function printMinutes(minuts) {

  // Dentro de la función "printMinutes", vemos una línea que dice "minUni.innerHTML = minutes[1]". Aquí, estamos accediendo a un elemento HTML con el atributo "minUni" y estableciendo su contenido interno (innerHTML) con el valor de la posición 1 del array "minutes". Esto significa que estamos tomando el segundo dígito de los minutos y colocándolo dentro del elemento HTML con el atributo "minUni".
  minUni.innerHTML=minuts[1]

  // A continuación, hay una línea que dice "minDec.innerHTML = minutes[0]". Aquí, estamos accediendo a otro elemento HTML con el atributo "minDec" y estableciendo su contenido interno (innerHTML) con el valor de la posición 0 del array "minutes". 
  // Esto significa que estamos tomando el primer dígito de los minutos y colocándolo dentro del elemento HTML con el atributo "minDec".
  minDec.innerHTML=minuts[0]
}


// Se define una función llamada "printSeconds" que acepta un parámetro llamado "seg". Esto significa que cuando llamemos a esta función, podemos pasarle un valor para "seg" que se utilizará dentro de la función.
function printSeconds(seg) {

  // Dentro de la función "printSeconds", vemos una línea que dice "secUni.innerHTML = seg[1]". Aquí, estamos accediendo a un elemento HTML con el atributo "secUni" y estableciendo su contenido interno (innerHTML) con el valor de la posición 1 del arreglo "seg". Esto significa que estamos tomando el segundo dígito de los segundos y colocándolo dentro del elemento HTML con el atributo "secUni".
  secUni.innerHTML=seg[1]

  // A continuación, hay una línea que dice "secDec.innerHTML = seg[0]". Aquí, estamos accediendo a otro elemento HTML con el atributo "secDec" y estableciendo su contenido interno (innerHTML) con el valor de la posición 0 del array "seg". Esto significa que estamos tomando el primer dígito de los segundos y colocándolo dentro del elemento HTML con el atributo "secDec".
  secDec.innerHTML=seg[0]
}

// Se define una función llamada "printMilliseconds" que acepta un parámetro llamado "milseg". Esto significa que cuando llamemos a esta función, podemos pasarle un valor para "milseg" que se utilizará dentro de la función.
function printMilliseconds(milseg) {

  // Dentro de la función "printMilliseconds", vemos una línea que dice "milUni.innerHTML = milseg[1]". Aquí, estamos accediendo a un elemento HTML con el atributo "milUni" y estableciendo su contenido interno (innerHTML) con el valor de la posición 1 del array "milseg". Esto significa que estamos tomando el segundo dígito de los milisegundos y colocándolo dentro del elemento HTML con el atributo "milUni".
  milUni.innerHTML=milseg[1]

  // A continuación, hay una línea que dice "milDec.innerHTML = milseg[0]". Aquí, estamos accediendo a otro elemento HTML con el atributo "milDec" y estableciendo su contenido interno (innerHTML) con el valor de la posición 0 del array "milseg". Esto significa que estamos tomando el primer dígito de los milisegundos y colocándolo dentro del elemento HTML con el atributo "milDec".
  milDec.innerHTML=milseg[0]
}


// Se define una función llamada "printSplit" que acepta un parámetro llamado "time". Esto significa que cuando llamemos a esta función, podemos pasarle un valor para "time" que se utilizará dentro de la función.
function printSplit(time) {

  // Dentro de la función "printSplit", se crea una variable llamada "text" que almacena una cadena de texto formada por diferentes partes del array "time".
  //  El formato es "mm : ss , ms", donde "mm" representa los minutos, "ss" representa los segundos y "ms" representa los milisegundos.

  let text = `${time[0][0]}${time[0][1]} : ${time[1][0]}${time[1][1]} , ${time[2][0]}${time[2][1]}`;

  // Se crea un nuevo elemento HTML llamado "line" utilizando la función "createElement" y se le asigna la etiqueta "li". Esto crea un nuevo elemento de lista.
  let line = document.createElement('li')

  // Se establece el contenido de texto del elemento "line" utilizando la propiedad "textContent" y se le asigna el valor de la variable "text". Esto establece el texto dentro del elemento de lista con el formato de tiempo calculado.
  line.textContent = text;

  // Se obtiene una referencia al elemento HTML con el identificador "splits" utilizando la función "getElementById" y se asigna a la variable "splits".
  splits = document.getElementById('splits');

  // Se agrega el elemento "line" como un hijo del elemento "splits" utilizando la función "appendChild". Esto agrega el elemento de lista con el tiempo calculado como una nueva entrada en la lista de "splits".
  splits.appendChild(line)
}

// Se define una función llamada "clearSplits" sin parámetros.
function clearSplits() {

  //Metodo 1: Dentro de la función "clearSplits", se utiliza la función "document.querySelectorAll('li')" para seleccionar todos los elementos del documento HTML que coincidan con la etiqueta "li". Esto devuelve una lista de nodos que representan los elementos de lista.
  // Metodo 2: Se utiliza el método "forEach" en la lista de elementos para iterar sobre cada uno de ellos.
  document.querySelectorAll('li').forEach(elem=>{

    // Dentro del bucle "forEach", se llama al método "remove()" en cada elemento para eliminarlo del documento HTML.
    elem.remove()
  })
}
// Se define una función llamada "setStopBtn" sin parámetros.
function setStopBtn() {
  // Paso1: Dentro de la función "setStopBtn", se llama al método "stopClick()" en el objeto "chronometer".
  // Paso 2: El método "stopClick()" en el objeto "chronometer" realiza la acción de detener el cronometro.
  chronometer.stopClick()
}

// Se define una función llamada "setSplitBtn" sin parámetros.
function setSplitBtn() {

  // Paso 1: Dentro de la función "setSplitBtn", se llama a la función "chronometer.setTime()" en el objeto "chronometer".
  // Paso 2: El resultado de llamar a "chronometer.setTime()" se pasa como argumento a la función "printSplit()".
  // Paso 3: La función "printSplit()" se llama con el resultado de "chronometer.setTime()" como argumento.
  printSplit(chronometer.setTime())
}

// Se define una función llamada "setStartBtn" sin parámetros.
function setStartBtn() {
  // Paso 1: Dentro de la función "setStartBtn", se llama al método "startClick()" en el objeto "chronometer".
  // Paso 2:  El método "startClick()" en el objeto "chronometer" realiza la acción de iniciar el cronómetro.
  // Paso 3: Después de llamar a "chronometer.startClick()", se llama a la función "printTime()".
// Paso 4: La función "printTime()" se encarga de mostrar el tiempo actual del cronómetro.
  chronometer.startClick();
  printTime();
}

// Se define una función llamada "setResetBtn" sin parámetros.
function setResetBtn() {
  // Paso 1: Dentro de la función "setResetBtn", se llama al método "resetClick()" en el objeto "chronometer". 
  // Paso 2: El método "resetClick()" en el objeto "chronometer" realiza la acción de reiniciar el cronómetro.
  // Paso 3: Después de llamar a "chronometer.resetClick()", se establece el contenido de texto de los elementos "secDec", "secUni", "minDec", "minUni", "milDec" y "milUni" en "0". 

  chronometer.resetClick();
  secDec.innerHTML="0"
  secUni.innerHTML="0"
  minDec.innerHTML="0"
  minUni.innerHTML="0"
  milDec.innerHTML="0"
  milUni.innerHTML="0"

    // Paso 4: Se llama a la función "clearSplits()" para eliminar todos los elementos de lista de la sección de "splits".
  clearSplits()
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(document.getElementById("btnLeft").className.includes("start")){
    document.getElementById("btnLeft").setAttribute("class", "btn stop");
    document.getElementById("btnLeft").innerHTML = "STOP";
    document.getElementById("btnRight").setAttribute("class", "btn split");
    document.getElementById("btnRight").innerHTML = "SPLIT";
    setStartBtn();
  }else{
    document.getElementById("btnLeft").setAttribute("class", "btn start")
    document.getElementById("btnLeft").innerHTML = "START"
    document.getElementById("btnRight").setAttribute("class", "btn reset")
    document.getElementById("btnRight").innerHTML = "RESET" 
    setStopBtn();
  }
});
// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(document.getElementById("btnRight").className.includes("reset")){
    setResetBtn();
  }else{
    setSplitBtn();
  }
});