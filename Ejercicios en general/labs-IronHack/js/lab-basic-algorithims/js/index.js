
// LAB | JS Algoritmos Básicos


// Iteration 1: Nombres y aporte(input)

let hackerOne = "Diego";
let hackerTwo = "Emilio";

console.log("El nombre del conductor es " + hackerOne);


console.log("El nombre del navegante es " + hackerTwo);


// Como podemos revisar el valor de longitud de una variable???? 
// Podemos usar la propiedad ""length"

console.log(hackerOne.length);

// Iteration 2: Conditionals (Condicionamos)

 if (hackerOne.length > hackerTwo.length) {
    console.log(`El conductor tiene el nombre más largo, tiene ${hackerOne.length} caracteres.`);
 }
 else if (hackerOne.length < hackerTwo.length) { console.log(`Parece que el navegante tiene el nombre más largo, tiene ${hackerTwo.length} caracteres.`);}
 else {
    console.log(`¡Vaya,ambos tienen nombre igual de largos,${hackerOne.length}cantidad de caracteres`);
 } 


//  Otra manera de condicionar es:

// Con operadores ternarios (TERNARY OPERATORS)
// LA SINTAX INITIAL RELACIONADO AL EJERCICIO -50/50-Ternary


hackerOne.length > hackerTwo.length ? "" : "";

console.log("Usando Operadores Ternarios -50/50 Dos condiciones");

hackerOne.length > hackerTwo.length ? console.log(`El conductor tiene el nombre más largo, tiene ${hackerOne.length} caracteres.`) : console.log(`El navegante tiene el nombre mas largo, tiene ${hackerTwo.length}`);


console.log("Usando Operadores Ternarios -50/50 - 2+ condiciones");


hackerOne.length > hackerTwo.length ? console.log(`HackerOne tiene mas caracteres`) : hackerOne.length === hackerTwo.length ? console.log(`Los dos tienen el mismo nombre`) : console.log(`HackerTwo tiene mas caracteres`);


// Todo este sintaxis es nuevo desde el 2016 ^ hacia delante y los podremos usar en html cuando aprendamos a usar Vuejs

// gracias a los frameworks como Vuejs , react y angular


// ITERACION 3.1


 let conductor0 = "John";
 let navegador0 = "";

 for (let index = 0; index < conductor0.length; index++) {
   
 navegador0 += conductor0[index].toUpperCase() + " ";
   
 }
 console.log(navegador0);


// ITERACION 3.2


 let nombre_conductor = "John"
 let nombre_navegador = "John"
let nombre_navegador_reverso = "";
for (let i = nombre_navegador.length - 1; i >= 0; i--) {
nombre_navegador_reverso += nombre_navegador[i];
 }
console.log(nombre_navegador_reverso);


// ITERACION 3.3

// EL NOMBRE DEL CONDUCTOR VA PRIMERO 

 let conductor1= ""
 let navegador1 = "John"

if (conductor1 < navegador1) {
console.log("El nombre del conductor va primero.");
 } else if (conductor1 > navegador1) {
console.log("Yo, el navegador va primero definitivamente.");
} else {
 console.log("¿Qué? ¿Los dos tienen el mismo nombre?");

}

// YO, EL NAVEGADOR VA PRIMERO DEFINITIVAMENTE

let name_conductor = "John"
 let name_navegador = ""

if (name_conductor < name_navegador) {
   console.log("El nombre del conductor va primero.");
} else if (name_conductor > name_navegador) {
console.log("Yo, el navegador va primero definitivamente.");
} else {
console.log("¿Qué? ¿Los dos tienen el mismo nombre?");

}


// ¿QUE? ¿LOS DOS TIENEN EL MISMO NOMBRE?

let conductor = "John"
 let navegador = "John"

if (conductor < navegador) {
   console.log("El nombre del conductor va primero.");
} else if (conductor > navegador) {
console.log("Yo, el navegador va primero definitivamente.");
} else {
console.log("¿Qué? ¿Los dos tienen el mismo nombre?");
}



const favoriteFood = ["Pizza", "Pasta", "Sushi", "Ice Cream"];

console.log("Me gusta mucho la " + favoriteFood[0]);



const numero = [10, 40, 44, 33, 45];
let suma = 0;

for (let i = 0; i < numero.length; i++) {
suma += numero[i];

 }
 console.log("La suma de los números es: " + suma);


      // BONIFICACION:


//  BONO NUMERO 1:


// CON ESTO CONTAMOS EL TOTAL DE PALABRAS EN EL TEXTO

 const texto = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis quam in elit gravida viverra. Vivamus at consequat neque. Aenean dapibus feugiat cursus. Nunc velit nisl, malesuada id suscipit vel, scelerisque in felis. Mauris volutpat quam tortor, at sollicitudin enim semper bibendum. Curabitur quis nisl eget diam pellentesque pretium. Phasellus placerat nisi at enim dignissim, vel lacinia ex porta. Morbi interdum nibh dui, at ultricies nisl blandit sit amet. Mauris tempus ac ligula quis bibendum. Fusce in justo diam. Sed nec feugiat purus, non dapibus purus. Sed iaculis massa vitae mauris maximus, a vestibulum odio dignissim. Praesent et quam ex.

 Nunc consequat, justo vehicula ullamcorper maximus, mi ligula interdum sem, vitae molestie leo turpis non lorem. Etiam id arcu venenatis erat consequat euismod eget egestas felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent mattis augue sem, nec mattis orci convallis non. Morbi lectus leo, sodales quis euismod at, euismod et diam. Sed sit amet feugiat turpis, sed consectetur orci. Suspendisse viverra quis elit non tempus. Donec vel mi hendrerit, pharetra ligula eu, convallis dolor. Integer non lectus odio. Suspendisse tincidunt convallis nunc, ac mollis elit mattis a. Etiam arcu ante, semper quis tempus sed, pellentesque ut magna. Maecenas pellentesque malesuada congue.
 
 In pellentesque ante sed justo tristique, ac mollis turpis mattis. Sed ultrices vehicula fermentum. Cras porttitor lectus consectetur elit rhoncus, nec euismod mi imperdiet. Duis eget felis eu ipsum fringilla varius. Duis ac eros vel libero volutpat molestie. Ut at viverra nibh, ut facilisis sem. Aenean eget mattis turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam nec sapien pulvinar, placerat ex mollis, bibendum elit. Donec rhoncus lectus a purus maximus bibendum. Vestibulum cursus finibus arcu, vel aliquam leo auctor ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin non consectetur orci. Curabitur lobortis dapibus volutpat. Praesent tempor commodo eleifend.`;
 
 const palabras = texto.split(' ');
 console.log(`Hay un total de ${palabras.length} palabras en el texto.`);


//  TOTAL DE PALABRAS EN EL TEXTO 321


// CON ESTO CONTAMOS LA CANTIDAD DE VECES QUE SE REPITE "et"
 
 let contador = 0;
 for (let i = 0; i < palabras.length; i++) {
   if (palabras[i] === 'et') {
     contador++;
   }
 }
 
 console.log(`La palabra "et" aparece ${contador} veces en el texto.`);
 
//  LA PALABRA "et" APARECE 6 VECES EN EL TEXTO



   

//  BONO NUMERO 2:

let phraseToCheck = "Un hombre, un plan, un canal, ¡Panamá!";

// CON ESTO ELIMINAMOS LOS SIGNOS DE PUNTUACION Y ESPACIOS


let cleanedPhrase = phraseToCheck.toLowerCase().replace(/[^\w]/g, "");

let isPalindrome = true;

//CON ESTO COMPROBAMOS SI ES UN PALINDROMO USANDO UN BUCLE FOR 


for (let i = 0; i < cleanedPhrase.length / 2; i++) {
  if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`"${phraseToCheck}" es un palíndromo.`);
} else {
  console.log(`"${phraseToCheck}" no es un palíndromo.`);
}

// OTROS EJEMPLOS 

let examples = [
  "Amor, Roma",
  "coche de carreras",
  "apilar gatos",
  "pisar no mascotas",
  "gato de taco",
  "ponlo",
  "¿Era un coche o un gato lo que vi?",
  "No hay 'x' en Nixon"
];

for (let example of examples) {
  let cleanedExample = example.toLowerCase().replace(/[^\w]/g, "");
  isPalindrome = true;
  
  for (let i = 0; i < cleanedExample.length / 2; i++) {
    if (cleanedExample[i] !== cleanedExample[cleanedExample.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  
  if (isPalindrome) {
    console.log(`"${example}" es un palíndromo.`);
  } else {
    console.log(`"${example}" no es un palíndromo.`);
  }
}
