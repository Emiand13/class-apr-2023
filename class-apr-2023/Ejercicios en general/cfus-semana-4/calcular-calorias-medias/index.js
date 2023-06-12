
// Reduce #1 - Calcular las calorías medias


const menu = [
    { name: "Carrots", calories: 150 },
    { name: "Steak", calories: 350 },
    { name: "Broccoli", calories: 120 },
    { name: "Chicken", calories: 250 },
    { name: "Pizza", calories: 520 },
  ];
   


const totalCalories = menu.reduce((sum, food) => sum + food.calories, 0);
const averageCalories = totalCalories / menu.length;

console.log("El número promedio de calorías es:", averageCalories);