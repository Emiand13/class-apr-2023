/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */

// La alerta del Formulario se irá a los 3 segundos despues de darle al submit

let form = document.forms["myForm"];
let alertElement = document.getElementById('alert');

form.addEventListener('submit', function(event) { 
  event.preventDefault(); // Evita el envío del formulario

  // Aquí agregaré la lógica de envío del formulario

  // Muestra la alerta solo después de enviar el formulario
  alertElement.classList.remove('hide');
  setTimeout(function() {
    alertElement.classList.add('hide');
  }, 3000);

  // Desplázate hacia arriba de la página
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});






function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Se debe completar el nombre");
        return false;
    } if (x == "ironhack") {
        alert("No puedes ser IronHack, porque yo soy IronHack");
        return true;
    }

}



