


// Desestructurar arrays

// Caso 2

const [a, b = 1] = [2];

console.log(a * b); // 2


// En este código, se utiliza la destructuración de arrays para asignar los valores del array [2] a las variables a y b.

// La sintaxis [a, b = 1] indica que se desea asignar el primer elemento del array a la variable a y, opcionalmente, el segundo elemento a la variable b. En caso de que no haya un segundo elemento en el array, se asigna el valor predeterminado de 1 a la variable b.

// En este caso, el array [2] solo tiene un elemento, que es 2. Por lo tanto, 2 se asigna a la variable a.

// Como no hay un segundo elemento en el array, se utiliza el valor predeterminado de 1 para la variable b.

// Luego, se realiza la operación a * b, que es 2 * 1, resultando en 2.

// Finalmente, el resultado 2 se imprime en la consola utilizando console.log(a * b).
