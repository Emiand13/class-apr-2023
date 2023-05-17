
// Filter #2 - Filtro mayores de 21

const people = [
    { name: "Candice", age: 25 },
    { name: "Tammy", age: 30 },
    { name: "Allen", age: 20 },
    { name: "Nettie", age: 21 },
    { name: "Stuart", age: 17 },
    { name: "Bill", age: 19 },
  ];
  
  const olderThan21 = people.filter(person => person.age >= 21);

  console.log(olderThan21);
