
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
