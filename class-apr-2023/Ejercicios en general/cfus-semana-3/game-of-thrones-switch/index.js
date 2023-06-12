
const name = prompt("Your favorite Game of Thrones character?");
let house = "";
switch (name) {
  case "Daenerys":
    house = "Targaryen";
    break;
  case "Jon Snow":
  case "Sansa":
  case "Arya":
    house = "Stark";
    break;
  case "Tyrion":
  case "Cersei":
    house = "Lannister";
    break;
}
console.log(`Your favorite character is from the house ${house}.`);




