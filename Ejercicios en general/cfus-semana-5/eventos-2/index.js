
// Uso de escuchadores de eventos #2

const colorChange = document.querySelector('#color-change');

colorChange.addEventListener("mouseover", () => {
colorChange.style.background = "brown";
})  

// Bonus: Aleatorizar el color cada vez que el div es pasado por encima con el cursor.


const colorChange2 = document.querySelector("#color-change2");
 
colorChange2.addEventListener("mouseover", () => {
  const color = randomColor();
  colorChange2.style.background = color;
});
 
const randomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};