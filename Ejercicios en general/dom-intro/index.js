


// DOM #1

// const boxes = document.getElementsByClassName("box");
// const paragraphs = document.getElementsByTagName("p");
 
// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].style.backgroundColor = "purple";
// }
 
// for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].style.fontSize = "20px";
// }
 
// const h2 = document.createElement("h2");
 
// h2.innerText = "Hello World";
// document.body.appendChild(h2);




// DOM#2
// selecciona el elemento h1 y cambia su texto a "Gato"

// const h1 = document.querySelector("h1");
// h1.textContent = "Cat";
 
// // selecciona todos los elementos con la clase "ratón" y cambia su color de fondo a "gris"

// const mice = document.querySelectorAll(".mouse");
// for (let mouse of mice) {
//     mouse.style.backgroundColor = "gray";
// }
 
// // crea un nuevo elemento p y lo agrega al elemento con el id "gato"

// const newP = document.createElement("p");
// newP.textContent = "Hola desde el DOM";
// const cat = document.querySelector("#cat");
// cat.appendChild(newP);






// // PRUEBAS

// let person = {
//     nombre: "Ironhacker",
//     age: 25,
//     favoriteMusic: "Metal",
//   };
  
//   let name = person.name;
//   let age = person.age;
//   let favoriteMusic = person.favoriteMusic;
  
//   console.log(`Hello, ${nombre}.`);
//   console.log(`You are ${age} years old.`);
//   console.log(`Your favorite music is ${favoriteMusic}.`);
  





// Creamos el elemento <p>
  
let newParagraph = document.createElement("p");

// Establecemos el contenido del texto del parrafo que acabamos de crear

newParagraph.textContent = "Me gusta JS";

// Y agregamos el parrafo al final del body 

document.body.appendChild(newParagraph);

console.log(newParagraph);




// let pElement = document.querySelector("p");
// console.log(pElement.innerHTML);

// let pElement = document.createElement("p");
// let textNode = document.createTextNode("Me gusta JS");
// pElement.appendChild(textNode);
// document.body.appendChild(pElement);
// console.log(pElement.innerHTML);
