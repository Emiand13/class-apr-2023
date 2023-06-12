
// Map #1 - Capitalizar ciudades

// array of cities:
const cities = [
    "miami",
    "barcelona",
    "madrid",
    "amsterdam",
    "berlin",
    "sao paulo",
    "lisbon",
    "mexico city",
    "paris",
  ];
  
// En esta  linea de codigo utilizamos el metodo "map" para iterar sobre cada elemento del array "cities".
// En el callback accedemos a la primera letra de cada ciudad con el metodo "charAt(0)" y luego la convertimos en mayuscula utilizando toUpperCase().
// Y para mantener el resto de nombres de ciudad sin cambios utilizamos el metodo "city.slice(1)" para obtener una subcadena desde el segundo carácter hacia delante y luego lo imprimimos en la console.

  const capitalizedCities = cities.map((city) => {
    return city.charAt(0).toUpperCase() + city.slice(1);
  });
  
  console.log(capitalizedCities);


//   Map #2 - Proyectos de clasificación

const students = [
    {
      name: "Tony Parker",
      firstProject: 80,
      secondProject: 75,
      finalExam: 90,
    },
    {
      name: "Marc Barchini",
      firstProject: 84,
      secondProject: 65,
      finalExam: 65,
    },
    {
      name: "Claudia Lopez",
      firstProject: 45,
      secondProject: 95,
      finalExam: 99,
    },
    {
      name: "Alvaro Briattore",
      firstProject: 82,
      secondProject: 92,
      finalExam: 70,
    },
    {
      name: "Isabel Ortega",
      firstProject: 90,
      secondProject: 32,
      finalExam: 85,
    },
    {
      name: "Francisco Martinez",
      firstProject: 90,
      secondProject: 55,
      finalExam: 78,
    },
    {
      name: "Jorge Carrillo",
      firstProject: 83,
      secondProject: 77,
      finalExam: 90,
    },
    {
      name: "Miguel López",
      firstProject: 80,
      secondProject: 75,
      finalExam: 75,
    },
    {
      name: "Carolina Perez",
      firstProject: 85,
      secondProject: 72,
      finalExam: 67,
    },
    {
      name: "Ruben Pardo",
      firstProject: 89,
      secondProject: 72,
      finalExam: 65,
    },
  ];
  

  const studentsWithFinalGrade = students.map(student => {
    const projectsAverage = (student.firstProject + student.secondProject) / 2;
    const finalGrade = (student.finalExam * 0.6) + (projectsAverage * 0.4);
  
    return {
      name: student.name,
      finalGrade: finalGrade
    };
  });
  
  console.log(studentsWithFinalGrade);
  