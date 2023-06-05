
// Promesas #1

const cityWeather = {
    Madrid: 20,
    Barcelona: 22,
    Paris: 18,
    Berlin: 15,
  };
  
  function getWeather(city) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (city in cityWeather) {
          const temperature = cityWeather[city];
          resolve(`La temperatura actual en ${city} es de ${temperature} grados Celsius.`);
        } else {
          reject("Ciudad no encontrada");
        }
      }, 5000);
    });
  }
  
  getWeather("Barcelona")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
 
getWeather("Madrid")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
 
getWeather("Paris")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

  getWeather("Berlin")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
 
  getWeather("Albacete")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
 