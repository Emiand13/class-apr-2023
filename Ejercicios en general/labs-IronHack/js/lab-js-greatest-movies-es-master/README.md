![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Las mejores películas de todos los tiempos

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1561a196c2e3852533bad64d9b0d4e9f.gif)

## Introducción

Acabamos de aprender algunos métodos útiles, que nos ayudarán a manipular **objetos y arrays**. En este ejercicio, practicaremos el trabajo con estos métodos, y deberás utilizar al menos uno de ellos en cada iteración.

La mejor manera de practicar es trabajar con datos reales. En el archivo **`src/data.js`**, encontrarás un array con información sobre **las 250 mejores películas de todos los tiempos** según el [ranking de IMDB](http://www.imdb.com/chart/top?ref\_=nv_mv\_250\_6) que utilizarás para mostrar lo que te pide cada iteración. :muscle:

<br/>

## Requisitos

- Haz un fork de este repo.
- Clona este repo.
- Practica los métodos avanzados de JavaScript`(map`, `reduce`, `filter` y `sort` para manipular arrays).

<br/>

## La presentación	

- Al terminar, ejecuta los siguientes comandos:

```bash
$ git add .
$ git commit -m "Solved lab"
$ git push origin master
```

- Crea un Pull Request para que tus TAs puedan comprobar tu trabajo.

<br/>

## Introducción

El `src/data.js` contiene un array de 250 películas. Es un array de 250 _objetos_ que contienen la información de cada película. Aquí hay un ejemplo de cómo se muestran los datos:

```javascript
{
  "title":"The Shawshank Redemption",
  "year":1994,
  "director":"Frank Darabont",
  "duration":"2h 22min",
  "genre":["Crime","Drama"],
  "score":9.3
}
```

Se profundizará en algunos "datos" que tiene este conjunto de datos. Por ejemplo, podemos utilizar este conjunto de datos para encontrar cuál es la película más popular, cuál es la duración media de la película, la lista de películas de algún director, etc.Bien, ahí viene tu reto. En las próximas iteraciones, utilizarás tus conocimientos de JS para manipular estos datos.

Recuerda leer cuidadosamente la descripción de cada iteración antes de trabajar en la solución.

<br/>

## Instrucciones

Trabajarás en el archivo `src/movies.js`, que ya está cargado en el archivo `index.html`.

El archivo `src/data`.js que contiene la matriz de películas también se carga en el archivo `index.html`.

Para ejecutar el código JavaScript, abra el archivo `index.html` utilizando la extensión VSCode [de Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

Para ver la salida del código JavaScript, abra la [consola en las herramientas de desarrollo](https://developer.chrome.com/docs/devtools/open/#console).

<br/>

<hr/>

### Nota sobre las pruebas

Este LAB está equipado con pruebas unitarias para proporcionar información automatizada sobre el progreso de su laboratorio.

**Después de completar las iteraciones básicas**, vaya a la sección **"Pruebe su código"** en la parte inferior. Allí se le pedirá que instale las dependencias de prueba y ejecute las pruebas para comprobar cuántas pruebas pasa su código. Una vez que ejecute las pruebas, corrija su código para pasar las pruebas que fallan.

<br/>

### Iteración 1: Todos los directores

Necesitamos obtener el array de todos los directores. Como esto es un calentamiento, te daremos una pista: tienes que _mapear_ a través del array de películas y obtener todos los directores en un array como resultado final. Adelante, crea una función llamada `getAllDirectors()` que reciba un array de películas como argumento y devuelva un nuevo (array _mapeado_).

<br/>

#### Bonus - Iteración 1.1: _Limpiar_ la matriz de directores

Parece que algunos de los directores han dirigido varias películas por lo que aparecerán varias veces en el array de directores. ¿Cómo podrías "limpiar" un poco esta matriz y hacerla unificada (es decir, sin duplicados)? No _le des prioridad a la parte de los bonos ahora, puedes volver a ella cuando termines con las iteraciones obligatorias._ :wink:

<br/>

### Iteración 2: Steven Spielberg. ¿El mejor?

Uno de los directores más famosos del cine es  **[Steven Spielberg](https://en.wikipedia.org/wiki/Steven_Spielberg)**, y tiene algunas películas dramáticas realmente impresionantes que están en nuestra lista, pero queremos saber cuántas hay.

Creemos una función `howManyMovies()` que reciba un array como parámetro y `filter` :eyes: el array para que tengamos sólo las películas de **drama** donde  **Steven Spielberg** es el director.

<br/>

### Iteración 3: Todas las puntuaciones son promedio

Estas son las mejores películas en base a sus puntuaciones, por lo que se supone que todas ellas tienen una puntuación notable. En esta iteración, queremos conocer la puntuación media de todas ellas y mostrarla en la consola. Crea una función `scoresAverage()` que reciba un array como parámetro y resuelva el reto.

La puntuación debe devolverse redondeada a 2 decimales.

**:bulb: Tal vez quieras _"reduce"_ los datos a un solo valor. :wink**:

<br/>

### Iteración 4: Películas de drama

El drama es el género que más se repite en nuestra `array`. Al parecer, ¡la gente adora el drama! :eyes:

Crea una función `dramaMoviesScore()` que reciba un array como parámetro para obtener la puntuación media de todas las películas de drama. Veamos si es mejor que la media general.

De nuevo, ¡redondeado a 2 decimales!

<br/>

### Iteración 5: Ordenar por año

Tenemos que ordenar las películas en orden ascendente según su año de estreno. Esto debería ser fácil utilizando uno de los **métodos** que acabamos de aprender. :wink:Crea una función `orderByYear()` que reciba un array como parámetro y devuelva un _nuevo array ordenado_.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_3db351079827c0acba42cf1e397dd8a3.gif)

Si dos películas tienen el mismo año, las ordena en orden alfabético por su título. :heavy:

**:bulb: Asegúrate de no mutar el original del array :wink:**

<br/>

### Iteración 6: Orden alfabético

Otra forma popular de ordenar las películas es ordenarlas alfabéticamente utilizando la clave `title`. Sin embargo, en este caso, sólo necesitamos imprimir el título de las 20 primeras. Muy fácil para un experto como tú. :wink:

Crea una función `orderAlphabetically()`, que reciba un array y devuelva un array de los 20 primeros títulos, ordenados alfabéticamente. Devuelve sólo el título de cada película, y si el array que recibe tiene menos de 20 películas, devuelve todas.

<br/>

### BONUS - Iteración 7: Formato de tiempo

Obtenemos la información de la página web **de IMDB**, pero la información de la duración se guardó en un formato que nos dificulta mucho la comparación de las películas.

Encontrar la película más larga es casi imposible usando ese formato, ¡así que vamos a cambiarlo!

- Crea una función `turnHoursToMinutes()` que reciba un array como parámetro, y con algo de _magia_ implementada por ti - reemplaza la información de duración de cada una de las películas por su equivalente en minutos. Por ejemplo:

```javascript
{
  "title":"The Shawshank Redemption",
  "year":1994,
  "director":"Frank Darabont",
  "duration":"2h 22min",
  "genre":["Crime","Drama"],
  "score":9.3
}
```

Debería ser:

```javascript
{
  "title":"The Shawshank Redemption",
  "year":1994,
  "director":"Frank Darabont",
  "duration":142,
  "genre":["Crime","Drama"],
  "score":9.3
}
```

Ten en cuenta que debes devolver un nuevo array con toda la información de las películas, es decir, no debes modificar el array original.

<br/>

### BONUS - Iteración 8: Media de la mejor puntuación anual

Siempre oímos hablar mucho de las películas clásicas, pero queremos saber qué año tiene la mejor puntuación media, ¡para poder declarar oficialmente el **MEJOR AÑO DE CINE**!

Crea la función `bestYearAvg()` que recibe un array de películas y nos da la respuesta de qué año fue el mejor para el cine y cuál fue su puntuación media. La función `bestYearAvg()` debe devolver una **string** con la siguiente estructura<br/>

**El mejor año fue con una puntuación media de .**

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_dfc3fe557576abca4dba274e3aabe9a3.gif)

<br/>

## Pruebe su código

¡Ah, sí! Ya tenemos nuestras pruebas, y ya sabes cómo funciona esto. Abre tu terminal, cambia de directorio a la raíz del laboratorio, y ejecuta `npm install` para instalar el ejecutor de pruebas. A continuación, ejecuta las pruebas ejecutando el comando `npm run test:watch`.

En resumen, los pasos son:

```shell
$ cd lab-js-greatest-movies-es
$ npm install
$ npm run test:watch
```

Y por último, abre el archivo `lab-solution.html` generado con la extensión VSCode "Live Server" para ver los resultados de las pruebas.

Recuerda centrarte en una prueba cada vez y leer atentamente las instrucciones para entender lo que tienes que hacer.

Las pruebas se encuentran en el archivo `tests/movies.spec.js`.

<br/>

**Feliz codificación!** :heart: