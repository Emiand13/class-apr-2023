// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const getAllDirectors = (movies) => {
  //  iteration 1.1
  let directoresSinFiltrar = movies.map((movie) => movie.director);
  // iteration 1.2
  let directoresFiltrados = directoresSinFiltrar.filter((director, index) => {
    return directoresSinFiltrar.indexOf(director) === index;
  });
  console.log(directoresFiltrados);
  return directoresFiltrados;
};

// getAllDirectors(movies);
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const dramaSpielbergMovies = movies.filter(movie =>
    movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  
  console.log(dramaSpielbergMovies);
  return dramaSpielbergMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {

   if (movies.length === 0) {
    return 0;
  }
  let totalScore = 0;
  let validScoresCount = 0;
  
  for (let i = 0; i < movies.length; i++) {
    const score = movies[i].score;
    if (typeof score === "number" && !isNaN (score)) {
      totalScore += score;
      validScoresCount++;
    } else {
      // Si la puntuación no es válida, agregar 0 a totalScore y no incrementar validScoresCount
      totalScore += 0;
    }
  }
  
  const averageScore = totalScore / movies.length;
  return parseFloat(averageScore.toFixed(2));
}



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
  let dramaMoviesCount = 0;
  let totalScore = 0;
  
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if (movie.genre.includes("Drama") && typeof movie.score === "number") {
      dramaMoviesCount++;
      totalScore += movie.score;
    }
  }
  
  if (dramaMoviesCount === 0) {
    return 0;
  }
  
  const averageScore = totalScore / dramaMoviesCount;
  return parseFloat(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (movies) => {
  // Creamos una copia del array original para no modificarlo directamente
  const moviesCopy = [...movies];

  // Usamos el método sort() para ordenar las películas según su año de estreno
  moviesCopy.sort((a, b) => {
    if (a.year < b.year) {
      return -1; // a va antes que b
    } else if (a.year > b.year) {
      return 1; // b va antes que a
    } else {
      // Si las películas tienen el mismo año de estreno, las ordenamos por título
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0; // Las películas son iguales
      }
    }
  });

  return moviesCopy; // Devolvemos el nuevo array ordenado
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// function orderAlphabetically(moviesArray) {}

function orderAlphabetically(moviesArray) {
  // Crear una copia de la matriz original para no modificarla
  const sortedMovies = [...moviesArray];

  // Ordenar las películas por título de forma ascendente
  sortedMovies.sort((a, b) => a.title.localeCompare(b.title));

  // Crear una matriz con los títulos de las primeras 20 películas
  const titlesArray = sortedMovies.slice(0, 20).map(movie => movie.title);

  // Devolver la matriz de títulos
  return titlesArray;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  return movies.map(function(movie) {
    let durationParts = movie.duration.split(" "); // Separa la duración en horas y minutos
    let hours = parseInt(durationParts[0], 10); // Convierte las horas a número entero
    let minutes = parseInt(durationParts[1], 10) || 0; // Convierte los minutos a número entero (si no hay minutos, se considera 0)
    let totalMinutes = (hours * 60) + minutes; // Calcula la duración total en minutos
    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: totalMinutes,
      genre: movie.genre,
      score: movie.score
    };
  });
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(movies) {
  if (movies.length === 0) {
    return null;
  }
  // Creamos un objeto para almacenar los datos de puntuación y cantidad de películas por año
  const scoreByYear = {};
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    // Comprobamos si el año ya está en el objeto. Si no, lo inicializamos a 0.
    if (!scoreByYear[movie.year]) {
      scoreByYear[movie.year] = {
        totalScore: 0,
        movieCount: 0
      };
    }
    // Sumamos la puntuación de la película al total de su año y aumentamos el contador de películas
    scoreByYear[movie.year].totalScore += movie.score;
    scoreByYear[movie.year].movieCount++;
  }
  // Inicializamos las variables para la búsqueda del mejor año
  let bestYear = 0;
  let bestScore = 0;
  // Recorremos el objeto scoreByYear
  for (const year in scoreByYear) {
    // Calculamos la puntuación media del año actual
    const yearScore = scoreByYear[year].totalScore / scoreByYear[year].movieCount;
    // Comprobamos si la puntuación es mayor que la del mejor año hasta el momento
    if (yearScore > bestScore) {
      // Si es así, actualizamos el mejor año y la mejor puntuación
      bestYear = year;
      bestScore = yearScore;
    } else if (yearScore === bestScore) {
      // Si hay empate, comprobamos qué año es el más antiguo y lo guardamos como el mejor
      bestYear = Math.min(bestYear, year);
    }
  }
  // Devolvemos la string con el resultado
  return `The best year was ${bestYear} with an average score of ${bestScore}`;
}



console.log("Y con esto acabamos el LABORATORIO | Las mejores películas de todos los tiempos!!!")