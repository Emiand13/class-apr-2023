
    // Aqui me permitido el lujo de mejorar el titulo a mi gusto y practicar cosas aprendidas en este dificil pero fabuloso lenguaje!!! JavaScript.:)

    const mejoraTitle = document.querySelector('.mejora');
    mejoraTitle.style.border = '1px solid #2CC5FA';
    mejoraTitle.style.padding = '10px', '10px', '10px','5px';
    mejoraTitle.style.backgroundColor = '#2CC5FA';
    mejoraTitle.style.borderRadius = '10px';
    mejoraTitle.style.textColor = 'white';
    

    
    const h1 = document.querySelector('.mejora');
    h1.style.color = 'white';

    const logo = document.createElement('img');
    logo.src = 'js/images/logo-ironhack1.png';
    logo.style.width = '50px';
    logo.style.height = '50px';
    logo.style.top = '50px'; 
    logo.style.float = 'left';
    logo.style.borderRadius = '5px';
  
    mejoraTitle.prepend(logo); 


    // ITERATION 1

    // Esta línea de código imprime un mensaje en la consola para confirmar que se está ejecutando la función updateSubtotal.
    // El mensaje de registro es "Calculating subtotal, yey!" y se utiliza como una especie de "señal" para saber que la función se está ejecutando en ese momento. 
    // Es una buena práctica colocar mensajes de registro en el código para identificar fácilmente en qué parte del código se está trabajando cuando se realizan pruebas o se solucionan problemas.
    function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');  


    // Obtener el precio unitario del producto:
    // Este codigo busca dentro del elemento product que es una fila de la tabla de productos y busca el elemento que tiene clase price y dentro de el, el elemento span osea el precio.
    const priceElement = product.querySelector('.price span');

    // Esta linea de codigo convierte el texto contenido en el elemento priceElement a un numero decimal y lo guarda en la variable price en este caso "price" seria 25.00.
    const price = parseFloat(priceElement.innerText);
  
    // Obtenemos la cantidad: con esto buscamos el elemento en HTML "input" dentro de la clase "quantity" que se encuentra dentro de cada fila de la tabla de productos, y esta seleccionando el campo de entrada de cantidad "input" para cada producto en el carrito.
    const quantityElement = product.querySelector('.quantity input');

    // Esta línea de código convierte la cantidad de productos que el usuario ha elegido comprar en un número decimal (punto flotante), que se almacena en la variable quantity.
    const quantity = parseFloat(quantityElement.value);
  
    // Calcular el subtotal: En esta linea de codigo lo que hacemos es multiplicar el precio (price)por la cantidad de productos que el usuario a seleccionado y guardarla en la variable subtotal.   
    // Ejemplo: Si el precio unitario del producto es 10$ y el usuario a seleccionado 2 unidades de ese producto el subtotal seria 20$ 
    const subtotal = price * quantity;

    // Actualizamos el subtotal en la tabla: En estas lineas de codigo estamos obteniendo el elemento HTML que muestra el subtotal de cada producto en el carrito de compras (que tiene la clase '.subtotal span') y actualizandolo con el nuevo valor del subtotal que acabamos de calcular.

    // -Primero, usamos el método querySelector() para obtener la referencia al elemento HTML de subtotal para este producto específico. Luego, actualizamos su texto interno (que se encuentra dentro del elemento span) con el nuevo valor del subtotal que acabamos de calcular. 
   
    const subtotalElement = product.querySelector('.subtotal span');

    // -Despues, El método toFixed() se utiliza para redondear el número del subtotal a dos decimales, y se asegura de que siempre se muestren dos dígitos después del punto decimal, incluso si el número es un número entero. Por ejemplo, si el subtotal es 25, toFixed(2) lo convertiría en "25.00".
    subtotalElement.innerText = subtotal.toFixed(2);

    // En esta linea de codigo utilizamos el metodo 'querySelectorAll' para seleccionar todos los elementos en el documento HTML que tienen la clase "product" y los almacenamos en la variable 'products' como una coleccion de nodos.
    // Cada uno de estos nodos es una fila de productos en la tabla de compras y contiene la informacion: como el nombre del producto, el precio,la cantidad,el subtotal y el boton de remove.
    // Y utilizaremos esta coleccion de nodos para iterar sobre cada fila de productos y calcular el subtotal de cada uno de ellos.
    const products = document.querySelectorAll('.product');

    // Esta linea de codigo es un bucle con la funcion (forEach) que va a iterar sobre cada uno de los elementos que se encuentren con la clase '.product'.

    products.forEach(product => {

    // Esta línea de codigo selecciona el elemento input dentro de la clase .quantity del producto actual.
      
    const quantityInput = product.querySelector('.quantity input');

    // Aquí se agrega un "event listener" al elemento de entrada (input) de cantidad del producto, que detecta el evento change. 
    // Este evento se activará cuando el usuario modifique la cantidad en el campo de entrada.
    quantityInput.addEventListener('change', () => {
    
    // Esta linea de codigo lo que hace es cuando detecta un cambio en la cantidad, llama a la funcion 'updateSubtotal' con el elemento del producto actual, y se actualiza el subtotal del producto en consecuencia.
    updateSubtotal(product);

    // Y finalmente cerramos nuestro bucle forEach, este codigo es una forma de actualizar automáticamente el subtotal de un producto cuando el usuario cambia la cantidad del mismo.

    });
    });
    }


    // ITERATION 2

    // En esta linea de codigo usamos la funcion "calculateAll" para calcular y mostrar el precio total de todos los productos en nuestro carrito.

    function calculateAll() {

    // Esta linea de codigo busca todos los elementos en el HTML con la clase "product" y los almacena en la variable "products".
    const products = document.getElementsByClassName('product');
  
    // Iteramos sobre cada producto: Utilizamos un bucle for para recorrer el conjunto de elementos HTML con la clase "product"
    for (let i = 0; i < products.length; i++)
    
    // En esta linea de codigo estamos definiendo la variable "product" que almacenará cada uno de los elementos "products" y cada vez que se ejecuta el bucle la variable "i" se incrementa y se asigna el siguiente elemento a la coleccion "products" a la variable "product".
    // Luego se usa esa variable para llamar a la funcion "updateSubtotal" que actualiza el subtotal del producto correspondiente.    
    {
    const product = products[i];
    
    // Obtenemos el precio unitario:  Este codigo busca dentro del elemento product que es una fila de la tabla de productos y busca el elemento que tiene clase price y dentro de el, el elemento span osea el precio.
    const priceElement = product.querySelector('.price span');

    // Esta linea de codigo convierte el texto contenido en el elemento priceElement a un numero decimal y lo guarda en la variable price en este caso "price" seria 25.00.
    const price = parseFloat(priceElement.innerText);
    
    // Obtenemos la cantidad: con esto buscamos el elemento en html "input" dentro de la clase "quantity" que se encuentra dentro de cada fila de la tabla de productos, y esta seleccionando el campo de entrada de cantidad "input" para cada producto en el carrito.
    const quantityElement = product.querySelector('.quantity input');

    // Esta linea de codigo obtiene el elemento de entrada de cantidad dentro de la fila del producto y luego toma el valor numerico ingresado por el usuario y lo convierte en un numero entero (un numero sin decimales). De esta manera podemos saber cuantos productos ha seleccionado el usuario y realizar calculos con ese valor. Ejemplo si el usuario a seleccionado 3 productos, multiplicamos el precio por 3 para obtener el subtotal.
    const quantity = parseInt(quantityElement.value);
    

    // Calculamos el subtotal: En esta linea de codigo estamos multiplicando el precio de un producto (en dolares) por la cantidad de productos que el usuario a seleccionado. El resultado de esta multiplicacion es el subtotal del producto(tambien en dolares).
    const subtotal = price * quantity;
    
    // Actualizamos el subtotal en la tabla: En estas lineas de codigo estamos obteniendo el elemento HTML que muestra el subtotal de cada producto en el carrito de compras (que tiene la clase '.subtotal span') y actualizandolo con el nuevo valor del subtotal que acabamos de calcular.

    // -Primero, usamos el método querySelector() para obtener la referencia al elemento HTML de subtotal para este producto específico. Luego, actualizamos su texto interno (que se encuentra dentro del elemento span) con el nuevo valor del subtotal que acabamos de calcular. 
    const subtotalElement = product.querySelector('.subtotal span');

    // -Despues, El método toFixed() se utiliza para redondear el número del subtotal a dos decimales, y se asegura de que siempre se muestren dos dígitos después del punto decimal, incluso si el número es un número entero. Por ejemplo, si el subtotal es 25, toFixed(2) lo convertiría en "25.00".
    subtotalElement.innerText = subtotal.toFixed(2);
  }
  
    // ITERATION 3

   // Esta linea de codigo selecciona todos los elementos con la clase "subtotal" y luego selecciona los elementos "span" que se encuentran dentro de esos elementos.
   // El resultado es una lista de nodos HTML que tienen el valor de la subtotal de cada producto.
   const subtotals = document.querySelectorAll('.subtotal span');

   // Esta linea de codigo define una variable llamada "total" que se inicia en 0 y que se utiliza para almacenar el valor total de la compra.
   let total = 0;

   // En esta linea de codigo utilizamos un bucle for para recorrer la lista de nodos HTML "subtotals".
   // La variable "i" se inicia en 0 y aumenta de 1 en 1 cada iteracion del bucle hasta que alcanza la longitud de la lista "subtotals".
   for (let i = 0; i < subtotals.length; i++) {

   // Dentro del bucle definimos una variable llamada "subtotal" que toma el valor de la subtotal del producto correspondiente, que se obtiene a partir del texto  que se encuentra dentro del nodo HTML.
   const subtotal = parseFloat(subtotals[i].innerText);

   // En esta linea de codigo agregamos el valor de "subtotal" a la variable "total" para calcular el valor total de la compra.
   total += subtotal;
   }
  
   // Actualizamos el total en la página: Con la palabra clave "const" declaramos la variable "totalElement" y estamos buscando en el documento HTML el elemento que tiene ID "total-value" y que es de tipo "span" y almacenamos ese elemento en la variable "totalElement", para que luego se pueda utilizar esa variable "totalElement" para acceder y modificar el contenido del elemento "span" que contiene el valor total de la compra.
   const totalElement = document.querySelector('#total-value span');

   // En esta linea de codigo estamos estableciendo el texto dentro del elemento HTML seleccionado por el identificador '#total-value span' con el valor calculado de la variable "total".

   // Actualiza el valor total en la pagina HTML con el resultado de la suma de los subtotales de todos los productos y los redondea a dos decimales.
   totalElement.innerText = total.toFixed(2);
   }


   // ITERATION 4

   // En esta linea de codigo definimos una función llamada "removeProduct" que toma un evento como argumento. La función será utilizada para eliminar un producto del carrito cuando el usuario haga clic en el botón "Remove" correspondiente.
   function removeProduct(event) {

   // En esta linea de codigo "const buttonClicked = event.currentTarget;" está asignando a la variable "buttonClicked" el botón específico que se ha hecho clic mediante el acceso al objeto "event" y la propiedad "currentTarget". Esto es útil porque nos permite identificar el botón específico que se ha hecho clic para que podamos tomar la acción correspondiente, como eliminar el producto de la cesta de la compra.
   const buttonClicked = event.currentTarget;


   // En esta linea de codigo la variable "buttonClicked" es el botón en el que se hizo clic para eliminar el producto correspondiente.
   // Luego, con la propiedad "parentNode" se accede al nodo padre del botón, que en este caso es el elemento "td" que contiene al botón.
   // Despues se accede al padre de este elemento "td", que es el elemento "tr" que contiene toda la fila del producto en la tabla. La variable "row" guarda la referencia a este elemento "tr".
   const row = buttonClicked.parentNode.parentNode;

   // En esta línea de código "row.remove();" elimina del DOM el nodo que representa la fila de la tabla correspondiente al botón "Eliminar" que ha sido clickeado por el usuario. En este caso, "row" es una variable que hace referencia al nodo "tr" que es el padre del botón "Eliminar". 
   // Llamando al método "remove()" en este nodo, se elimina la fila completa de la tabla de la página web.
   row.remove();

   // En esta linea de codigo la funcion "updateSubtotal" recibe como argumento la fila de un producto en el carrito y actualiza el subtotal de ese producto según su cantidad y precio unitario.
   updateSubtotal(row);


   // En esta linea de codigo la función "updateTotal" actualiza el valor total en la página web, tomando en cuenta los subtotales de cada producto que se encuentre en el carrito.
   updateTotal();}
  
   // En esta línea de código está seleccionando todos los elementos que tienen la clase "btn-remove" en la página HTML y almacenándolos en una variable llamada "removeButtons". Los elementos con esta clase son los botones "Eliminar" que se encuentran en cada fila de productos de la tabla de la lista de compras.
   const removeButtons1 = document.querySelectorAll('.btn-remove');


   // En esta línea de código seleccionamos todos los botones con la clase "btn-remove" y luego añadimos un "event listener" a cada uno de ellos, con la función "removeProduct" como callback.
   // Esto significa que cuando se hace clic en uno de los botones "remove", se ejecutará la función "removeProduct".
   removeButtons1.forEach(button => button.addEventListener('click', removeProduct));
  
  
    // ME FALTA COMENTAR TODA LA ITERACION 5 PARA FACILITARME EL APRENDIZAJE !!!

// ITERATION 5

const calculatePricesBtn = document.getElementById('calculate');
const createProductBtn = document.getElementById('create');

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector('.price span').innerText);
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subtotal.toFixed(2);
}

function calculateAll() {
  let total = 0;
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    updateSubtotal(product);
    total += parseFloat(product.querySelector('.subtotal span').innerText);
  });
  document.getElementById('total-value').querySelector('span').innerText = total.toFixed(2);
}

function removeProduct(event) {
  const buttonClicked = event.currentTarget;
  const row = buttonClicked.parentNode.parentNode;
  row.remove();
  updateTotal();
}

function createProduct() {
  const productName = document.querySelector('.create-product td:first-child input').value;
  const productPrice = parseFloat(document.querySelector('.create-product td:nth-child(2) input').value).toFixed(2);
  
  const tableBody = document.querySelector('tbody');
  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = `
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;
  
  tableBody.appendChild(newRow);
  const removeButton = newRow.querySelector('.btn-remove');
  removeButton.addEventListener('click', removeProduct);

  const productNameInput = document.querySelector('.create-product td:first-child input');
  const productPriceInput = document.querySelector('.create-product td:nth-child(2) input');
  productNameInput.value = '';
  productPriceInput.value = '';
  
}

function updateTotal() {
  calculateAll();
}

calculatePricesBtn.addEventListener('click', calculateAll);
createProductBtn.addEventListener('click', createProduct);
const removeButtons = document.querySelectorAll('.btn-remove');
removeButtons.forEach(button => button.addEventListener('click', removeProduct));
