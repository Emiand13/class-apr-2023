

// iteracion 1

// seleccionamos el elemento a(ancor link) con el id "google-link"

let googleLink = document.getElementById("#google-link");

// establecemos el atributo href del elemento googleLink en "http://www.google.com"

googleLink.href = "https://www.google.com";



// iteracion 2

// Establecer el atributo href en "http://www.google.com" - terminado en la iteración anterior

googleLink.href = "https://www.google.com";


// Establecer el atributo de destino en "_blank"
googleLink.target = "_blank";


// Manipulación DOM #3 - Eliminar el atributo de un elemento existente


// Esto eliminaría la clase del primer párrafo en el código (en caso de que hubiera varios párrafos):
const parrafo1 = document.querySelector("p");
parrafo.removeAttribute("class");


// Tambien podemos utilizar element.classList.remove("example-class") si solo queremos eliminar una clase especifica.

const parrafo = document.querySelector("p");
parrafo.classList.remove("example-class");



