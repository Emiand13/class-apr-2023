
// LAB Funciones y Arrays en JS

// ITERACION 1: Encontrar el máximo


function maxOfTwoNumbers(num1,num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
  
  // Llamada a la función maxOfTwoNumbers con dos argumentos
  let result = maxOfTwoNumbers(10, 5);
  
  console.log(result); // 10


  
// ITERACION 2:  Encontrar la palabra más larga


function findLongestWord (words) {

    let longestWord = " ";

    for(let i = 0; i < words.length; i++) {

        if(words[i].length > longestWord.length){

            longestWord = words[i];
        }
    }
   
    return longestWord;
}

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

console.log(findLongestWord(words));  //resultado crocodile


// ITERACION 3: Calcular la suma

function sumNumbers(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum;
  }
  
  const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
  console.log(sumNumbers(numbers)); //resultado 87




//   ITERACION 4: Calcular la media

// Nivel 1: Matriz de números

function averageNumbers(numeros) {
  let sum = 0;

  for (let i = 0; i < numeros.length; i++) {
    sum += numeros[i];
  }

  const avg = sum / numeros.length;

  return avg;
}

const numeros = [2, 6, 9, 10, 7, 4, 1, 9];
console.log(averageNumbers(numeros)); // resultado: 6


//   Nivel 2: Matriz de cadenas


function averageWordLength(words1) {
    let totalLength = 0;
  
    for (let i = 0; i < words1.length; i++) {
      totalLength += words1[i].length;
    }
  
    return totalLength / words1.length;
  }
  
  const words1 = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
  console.log(averageWordLength(words1)); //resultado 5.3



// ITERACION 5: Arreglos únicos


function uniquifyArray(wordArray) {
    let uniqueWords = [];
  
    for (let i = 0; i < wordArray.length; i++) {
      if (uniqueWords.indexOf(wordArray[i]) === -1) {
        uniqueWords.push(wordArray[i]);
      }
    }
  
    return uniqueWords;
  }
  
  const wordArray = [
    'crab',
    'poison',
    'contagious',
    'simple',
    'bring',
    'sharp',
    'playground',
    'poison',
    'communion',
    'simple',
    'bring'
  ];
  
  console.log(uniquifyArray(wordArray)); // ['crab', 'poison', 'contagious', 'simple', 'bring', 'sharp', 'playground', 'communion']
  

//   ITERACION 6: Buscar elementos

function doesWordExist(words6, word) {
    for(let i = 0; i < words6.length; i++) {
      if(words6[i] === word) {
        return true;
      }
    }
    return false;
  }
  
  const words6 = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
  console.log(doesWordExist(words6, 'machine')); // true
  console.log(doesWordExist(words6, 'apple')); // false
  
  



// ITERACION 7: Contar la repetición

function howManyTimes(wordsArray, wordToSearch) {
    let count = 0;
    for (let i = 0; i < wordsArray.length; i++) {
      if (wordsArray[i] === wordToSearch) {
        count++;
      }
    }
    return count;
  }
  
  // Ejemplo de uso:
  const words7 = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
  ];
  console.log(howManyTimes(words7, 'matter')); // Debe imprimir 4
  
