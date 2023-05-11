
// Instrucciones
// 1.Crea tres (3) variables: una para guardar tu nombre, otra para tu apellido y una para tu edad.

// 2.Haz que las primeras letras de tu nombre y apellido estén en mayúscula.

// 3.Concatena tu nombre y apellido (después de poner las primeras letras en mayúscula) para crear una nueva cadena con tu nombre completo y guárdala en una variable.

// 4.Usa el método console.log() para imprimir la frase con la siguiente estructura: My name is __________ and I am _____.




// 1.Crea tres (3) variables: una para guardar tu nombre, otra para tu apellido y una para tu edad.
const name = "emilio";
const surname = "carrasco";
const age = 35;
 
// 2.Haz que las primeras letras de tu nombre y apellido estén en mayúscula.
const nameInCaps = name.charAt(0).toUpperCase() + name.substring(1);
console.log(nameInCaps);  // Emilio
 
let surnameInCaps = surname[0].toUpperCase() + surname.slice(1);
console.log(surnameInCaps); // Carrasco
 

// 3.Concatena tu nombre y apellido (después de poner las primeras letras en mayúscula) para crear una nueva cadena con tu nombre completo y guárdala en una variable.
let fullName = `${nameInCaps} ${surnameInCaps}`;
 
// let fullName = capFirstName + ' ' + capLastName;
 
console.log(fullName); // Emilio Carrasco

// 4.Usa el método console.log() para imprimir la frase con la siguiente estructura: My name is __________ and I am _____.

 
console.log(`My name is ${fullName} and I am ${age}.`);
// My name is Emilio and I am 35.