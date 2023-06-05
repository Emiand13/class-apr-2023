

// Filter #1 - Filtrar números impares menores de 100


const numbers = [1, 60, 112, 123, 100, 99, 73];

const filteredNumbers = numbers.filter(number => number % 2 !== 0 && number < 100);

console.log("Números impares menores que 100:", filteredNumbers);