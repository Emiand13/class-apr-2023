  // index.js


//   En el JavaScript anterior, para seleccionar el elemento párrafo, utilizaremos el método document.getElementById(). Este método devuelve el nodo p seleccionado.

// let paragraph = document.getElementById("paragraph");

// console.log(paragraph); // <== <p id="paragraph">What is your name?</p>


// También podemos seleccionar un elemento por su className. Pero ten cuidado con este método. Siempre devolverá un array de nodos DOM, sin importar si encuentra uno o más elementos en el código.

// let links = document.getElementsByClassName("link");

// console.log(links); // <== HTMLCollection [a#google-link.link, google-link: a#google-link.link]
// 0: a#google-link.link
// length: 1
// google-link: a#google-link.link
// __proto__: HTMLCollection


// Finalmente, podemos seleccionar un elemento por su tagName. Este selector también devolverá un array de nodos, aunque sólo haya un elemento.

// let divs = document.getElementsByTagName("div");

// console.log(divs);

// Obtener el contenido de un atributo de un elemento
// Para obtener el valor de un elemento, necesitamos utilizar el método .getAttribute().

// let attribute = element.getAttribute(attributeName);

// index.js

// let paragraph = document.getElementById("paragraph");
// let paragraphId = paragraph.getAttribute("id");
// console.log(paragraphId); // <== paragraph



// element.setAttribute(name, value);

// // index.js
// let paragraph = document.getElementById("paragraph");
// paragraph.setAttribute("id", "info-paragraph");

// let titles = document.getElementsByClassName("storylink");
// for (let i = 0; i < titles.length; i++) {
//     console.log(titles[i].innerHTML);
//   }
  


  // Set the href attribute to "http://www.google.com" - finished in the previous iteration

let google = document.getElementById("google-link")
google.href = "http://www.google.com";
 
// Set the target attribute to "_blank"
google.target = "_blank";

let p = document.getElementsByClassName('example-class')[0];
const parahraph = document.querySelector("p");
parahraph.removeAttribute("class");

console.log(parahraph);
