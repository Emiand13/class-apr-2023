const language = prompt("Please enter the language - (options: Spanish, French, English): ");
const name = prompt("Please enter your name: ");
 
switch (language) {
  case "Spanish":
    console.log(`Hola, ${name}!`);
    break;
  case "French":
    console.log(`Salut, ${name}!`);
    break;
  case "English":
    console.log(`Hello, ${name}!`);
    break;
  default:
    console.log("I am not sure which language that is! Sorry!");}