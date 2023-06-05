
//  iteracion 1#
 
  let i = 0;
  while (i <= 30) {
    console.log(i);
    i++; // esto es lo mismo que i = i + 1
 }



// iteracion 2#
 
let index = 0;
while (index < 30) {
  index++; // this is the same as i = i + 1
  switch (index) {
    case 10:
      console.log("ten");
      break;
    case 20:
      console.log("twenty");
      break;
    case 30:
      console.log("thirty");
      break;
    default:
      console.log(index);
      break;
  }
}
