


// En esta linea de codigo estamos declarando la variable "button" y metiendonos dentro del DOM conseguimos el elemento con ID "add-item-button" con el metodo "getElementById".
let button = document.getElementById("add-item-button");

// En esta linea de codigo estamos declarando la variable "input"y metiendonos dentro del DOM, creamos el elemento "input" con el metodo "createElement".
let input = document.createElement("input");


// En esta linea de codigo establecemos el valor del atributo "type" del elemento "input" creado anteriormente y que en este caso es de tipo texto con el metodo "setAttribute" que en este caso recibe dos argumentos: el nombre del atributo "type" y el valor que se le asigna "text".
input.setAttribute("type", "text");

// En esta linea de codigo establecemos el valor del atributo "placeholder" del elemento "input" creado tambien anteriormente y que en este caso se utiliza para proporcionar una breve descripcion o pista dentro del campo de entrada que indica al usuario que tipo de informacion se espera que proporcione en el campo. 
// En este caso tambien recibe dos argumentos el nombre del atributo que se desea establecer "placeholder" y el valor que se le asigna "Enter an item".
input.setAttribute("placeholder","Enter an item");


// En esta linea de codigo estamos declarando la variable "parent" y obtenemos la referencia al elemento padre del "button" con la propiedad "parentNode" y la almacenamos en la variable.
let parent = button.parentNode;


// En esta linea de codigo utilizamos el metodo "insertBefore" en el elemento padre "parent" que recibe dos argumentos: el primero es el elemento que se desea insertar "input" y el segundo es el elemento antes del cual se desea insertar el nuevo elemento "button".
parent.insertBefore(input, button);