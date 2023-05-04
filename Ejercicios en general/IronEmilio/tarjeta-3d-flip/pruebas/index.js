
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




