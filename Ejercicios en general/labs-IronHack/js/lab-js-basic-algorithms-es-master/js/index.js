
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


// Iteration 3: Loops



