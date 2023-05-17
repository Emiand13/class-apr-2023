
// DOM Manipulation #6 - Creación de un evento click

// En esta linea de codigo obtenemos el botón y la lista por sus ID
const addItemButton = document.querySelector("#add-item-button");
const itemsList = document.querySelector("#items-list");
 
// En esta linea de codigo inicializamos el número de artículo
let itemNumber = 1;
 
// En esta linea de codigo agregamos un evento de click al boton
addItemButton.addEventListener("click", () => {

// En  esta linea de codigo creamos un nuevo elemento li
  const newItem = document.createElement("li");

// En esta linea de codigo establecemos el contenido de texto del nuevo elemento li
  newItem.textContent = `Item number ${itemNumber}`;
  
  // En esta linea de codigo agregamos el nuevo elemento li a la lista
  itemsList.appendChild(newItem);
 
  // En esta linea de codigo incrementamos el número de artículo
  itemNumber++;
});