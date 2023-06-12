
// Desestructuración de parámetros de función

const greenSmoothie = {
    leaf: "spinach",
    veggie: "bok choy",
    seed: "ground flex seeds",
    nut: "peanut",
    liquid: "almond milk",
  };
  

 const { leaf, veggie, seed, nut, liquid } = greenSmoothie;

const result = `Para hacer un batido, debes agregar: '${leaf}', '${veggie}', '${seed}', '${nut}' y '${liquid}'`;

console.log(result);