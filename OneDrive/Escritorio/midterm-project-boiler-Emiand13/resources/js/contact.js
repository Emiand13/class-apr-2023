/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */

// Obtener el formulario y agregar un event listener para el evento 'submit'
document.addEventListener('DOMContentLoaded', function() {
const form = document.forms.myForm;
form.addEventListener('submit', postData);

function postData(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

  // Obtener los datos del formulario
  const formData = new FormData(form);

  // Realizar la solicitud POST utilizando Fetch
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json()) // Convertir la respuesta a JSON, si es necesario
    .then(data => {
      // Aquí puedes mostrar un mensaje en la pantalla o realizar cualquier acción adicional con los datos devueltos por el servidor
      console.log('El mensaje se envió correctamente...Gracias!!!:', data);
      showMessage('El mensaje se envió correctamente...Gracias!!!');
      setTimeout(() => {
        hideMessage();
        form.reset(); // Limpiar los campos del formulario
      }, 3000); // Ocultar el mensaje y limpiar los campos después de 3 segundos (3000 milisegundos)
    })
    .catch(error => {
      // Aquí puedes manejar errores en caso de que la llamada falle
      console.error('Error en la llamada:', error);
      showMessage('Error en la llamada');
      setTimeout(hideMessage, 3000); // Ocultar el mensaje después de 3 segundos (3000 milisegundos)
    });
}

function showMessage(message) {
  // Mostrar el mensaje en el elemento con el ID "alert"
  const alertElement = document.getElementById('alert');
  alertElement.textContent = message;
  alertElement.classList.remove('hide'); // Mostrar el elemento oculto
}

function hideMessage() {
  // Ocultar el mensaje
  const alertElement = document.getElementById('alert');
  alertElement.classList.add('hide');
}

// En este codigo creamos una alerta para cuando el campo del nombre del formulario se rellena como Ironhack, la respuesta de la alerta es "No puedes ser IronHack, porque yo soy IronHack Emiand13 ;)"

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Se debe completar el nombre");
    return false;
  } if (x == "IronHack") {
    alert("No puedes ser IronHack, porque yo soy IronHack Emiand13 ;)");
    return true;
  }
}

});