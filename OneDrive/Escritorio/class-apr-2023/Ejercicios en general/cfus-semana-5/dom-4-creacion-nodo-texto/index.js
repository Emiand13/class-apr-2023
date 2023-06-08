
// Con esta primera linea de codigo estamos creando un p (parrafo) elemento

let newP = document.createElement("p");

// Con esta linea de codigo estamos creando un nodo de texto

let newText = document.createTextNode("¡Hola! Estoy usando JavaScript");

// Con esta linea de codigo estamos agregando el nodo de texto al elemento p (parrafo)
p.appenChild(newText);

// Y con esta ultima linea de codigo estamos agregando ese elemento p (parrafo) junto con su texto al documento (DOM)

document.body.appendChild(p);