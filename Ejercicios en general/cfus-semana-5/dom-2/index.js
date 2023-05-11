
// DOM#2

// Selecciona el elemento h1 y cambia su texto a "Gato"

const h1 = document.querySelector("h1");
h1.textContent = "Cat";
 
// Selecciona todos los elementos con la clase "ratón" y cambia su color de fondo a "gris"

const ratones = document.querySelectorAll(".mouse");
for (let mouse of ratones) {
    mouse.style.backgroundColor = "gray";
}
 
// Crea un nuevo elemento p y lo agrega al elemento con el id "gato"

const nuevo = document.createElement("p");
nuevo.textContent = "Hello from the DOM";
const cat = document.querySelector("#cat");
cat.appendChild(nuevo);