
// const favoriteFood = ["Pizza", "Pasta", "Sushi", "Ice Cream"];

// console.log("Me gusta mucho la " + favoriteFood[0]);





// const numero = [10, 40, 44, 33, 45];
// let suma = 0;

// for (let i = 0; i < numero.length; i++) {
// suma += numero[i];

//  }
//  console.log("La suma de los números es: " + suma);







const texto = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis quam in elit gravida viverra. Vivamus at consequat neque. Aenean dapibus feugiat cursus. Nunc velit nisl, malesuada id suscipit vel, scelerisque in felis. Mauris volutpat quam tortor, at sollicitudin enim semper bibendum. Curabitur quis nisl eget diam pellentesque pretium. Phasellus placerat nisi at enim dignissim, vel lacinia ex porta. Morbi interdum nibh dui, at ultricies nisl blandit sit amet. Mauris tempus ac ligula quis bibendum. Fusce in justo diam. Sed nec feugiat purus, non dapibus purus. Sed iaculis massa vitae mauris maximus, a vestibulum odio dignissim. Praesent et quam ex.

Nunc consequat, justo vehicula ullamcorper maximus, mi ligula interdum sem, vitae molestie leo turpis non lorem. Etiam id arcu venenatis erat consequat euismod eget egestas felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent mattis augue sem, nec mattis orci convallis non. Morbi lectus leo, sodales quis euismod at, euismod et diam. Sed sit amet feugiat turpis, sed consectetur orci. Suspendisse viverra quis elit non tempus. Donec vel mi hendrerit, pharetra ligula eu, convallis dolor. Integer non lectus odio. Suspendisse tincidunt convallis nunc, ac mollis elit mattis a. Etiam arcu ante, semper quis tempus sed, pellentesque ut magna. Maecenas pellentesque malesuada congue.

In pellentesque ante sed justo tristique, ac mollis turpis mattis. Sed ultrices vehicula fermentum. Cras porttitor lectus consectetur elit rhoncus, nec euismod mi imperdiet. Duis eget felis eu ipsum fringilla varius. Duis ac eros vel libero volutpat molestie. Ut at viverra nibh, ut facilisis sem. Aenean eget mattis turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam nec sapien pulvinar, placerat ex mollis, bibendum elit. Donec rhoncus lectus a purus maximus bibendum. Vestibulum cursus finibus arcu, vel aliquam leo auctor ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin non consectetur orci. Curabitur lobortis dapibus volutpat. Praesent tempor commodo eleifend.`;

const palabras = texto.split(' ');
console.log(`Hay un total de ${palabras.length} palabras en el texto.`);

let contador = 0;
for (let i = 0; i < palabras.length; i++) {
  if (palabras[i] === 'et') {
    contador++;
  }
}

console.log(`La palabra "et" aparece ${contador} veces en el texto.`);




// // function declaration (statement)
// function welcomeMessage(message) {
//   return message;
// }

// // function assigned to a variable
// const greeting = welcomeMessage("Muy buenas estamos aprendiendo js");

// console.log(greeting); // So nice to have you here! Welcome!



// function expression - is a function without name stored in a variable
const welcomeMessage = function (message) {
  console.log(message);
};

welcomeMessage("So nice to have you here! Welcome!");
// => So nice to have you here! Welcome!






// let addition = 0;

// let number = parseInt(prompt("Escribe un numero:"));

// while (number >= 0){

// addition += number;
// number = parseInt(prompt ("Escribe un numero:"));

// }

// console.log(`la suma total de estos dos números usando un ciclo while es: $(addition) `);



// // function declaration (statement)

// checkFuncDeclaration(); // => Func declaration CAN be invoked before it's defined.

// function checkFuncDeclaration() {
//   console.log("Func declaration CAN be invoked before it is defined.");
// }

// function expression

// checkFuncExpression(); // => ReferenceError: checkFuncExpression is not defined

// const checkFuncExpression = function () {
//   console.log("Func expression CAN NOT be invoked before it is defined.");
// };



// const language = prompt(
//   "Please enter the language - (options: Spanish, French, English): "
// );
// const name = prompt("Please enter your name: ");
 
// if (language === "Spanish") {
//   console.log(`Hola, ${name}`);
// } else if (language === "French") {
//   console.log(`Salut, ${name}`);
// } else if (language === "English") {
//   console.log(`Hello, ${name}`);
// } else {
//   console.log("I am not sure which language that is! Sorry!");
// }


// const language = prompt("Please enter the language - (options: Spanish, French, English): ");
// const name = prompt("Please enter your name: ");
 
// switch (language) {
//   case "Spanish":
//     console.log(`Hola, ${name}!`);
//     break;
//   case "French":
//     console.log(`Salut, ${name}!`);
//     break;
//   case "English":
//     console.log(`Hello, ${name}!`);
//     break;
//   default:
//     console.log("I am not sure which language that is! Sorry!");
// }




if ("false") {
  console.log("Passed thingy is truthy");
} else {
  console.log("Passed thingy is falsy");
}

// => 'Passed thingy is truthy'



// const message = "Don't be sad, be happy!";
// console.log(message.slice(0, 3)); // <== Don
// console.log(message); // <== Don't be sad, be happy!





// // Game of Thrones Switch

// const name = prompt("Your favorite Game of Thrones character?");
 
// let house = "";
// switch (name) {
//   case "Daenerys":
//     house = "Targaryen";
//     break;
//   case "Jon Snow":
//   case "Sansa":
//   case "Arya":
//     house = "Stark";
//     break;
//   case "Tyrion":
//   case "Cersei":
//     house = "Lannister";
//     break;
// }
 
// console.log(`Your favorite character is from the house ${house}.`);


// BUCLES E ITERACCIONES 1

// Iteración 1 - Crea un bucle while que cuente desde 0 hasta 30


 
let i = 0;
while (i <= 30) {
  console.log(i);
  i++;
}
  // Iteración 2 - Cambia el script anterior para escribir “diez” cuando el valor del contador sea 10, y “veinte” cuando el valor del contador sea 20. Resultado esperado:


  // iteration 2
 
// let i = 0;
// while (i < 30) {
//   i++; // this is the same as i = i + 1
//   if (i === 10) {
//     console.log("ten");
//   } else if (i === 20) {
//     console.log("twenty");
//   } else if (i === 30) {
//     console.log("thirty");
//   } else {
//     console.log(i);
//   }
//   }



// Bucles e Iteraciones #2
// Instrucciones
// Crea un bucle for que cuente del 0 al 20. En cada iteración, comprueba si el número actual es par o impar, y escríbelo en la consola.

// Hint: Necesitarás el operador de remainder (resto) para esto.


// Resultado esperado:

// 1 is odd 2 is even … 19 is odd 20 is even

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}