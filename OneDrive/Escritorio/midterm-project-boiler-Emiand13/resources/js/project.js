/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL  ESTE NO CONSIGO SACARLO :(   */

window.onload = function() {
    fetchData()
       .then(projects => {
          const project = projects.find(project => project.uuid === 1);
 
          if (project) {
             showProjectInfo(project);
          } else {
             console.log('No se encontró el proyecto con el UUID 1');
          }
       })
       .catch(error => {
          console.log('Error al obtener los datos del proyecto:', error);
       });
 };
 
 
 function showProjectInfo(project) {
    document.querySelector('#project-name').textContent = project.name;
    document.querySelector('#project-description').textContent = project.description;
    document.querySelector('#project-content').innerHTML = project.content;
    document.querySelector('#project-image').src = project.image;
    document.querySelector('#project-completed-on').textContent = project.completed_on;
 }
 
 function fetchData() {
    return fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
       .then(response => response.json());
 }
 




// -----------------------Advanced-----------------------

var url = window.location.href;
  var partesUrl = url.split('?');
  var postId = null;
  if (partesUrl.length > 1) {
    var parametros = partesUrl[1].split('&');
    for (var i = 0; i < parametros.length; i++) {
      var parametro = parametros[i].split('=');
      if (parametro[0] === 'project_id') {
        postId = parametro[1];
        break;
      }
    }
  }

  // Realizar una solicitud a la API para obtener el post específico
  if (postId) {
    var apiUrl = 'https://jsonplaceholder.typicode.com/posts/' + postId;
    fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Mostrar el post en la página
        mostrarPost(data);
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  }

  // Función para mostrar el post en la página
  function mostrarPost(post) {
    var projectArticle = document.getElementById('project-article');
    var tituloElemento = document.createElement('h1');
    tituloElemento.textContent = post.title;
    projectArticle.insertBefore(tituloElemento, projectArticle.firstChild);

    var descripcionElemento = document.createElement('p');
    descripcionElemento.textContent = post.body;
    projectArticle.appendChild(descripcionElemento);
  }















// async function fetchData() {
//     return fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
//         .then(response => response.json());
// }

// function redirectNoContent() {
//     window.location.replace(`${getHostname()}/404.html`);
// }
// function getHostname() {
//    // Cuando se ejecuta en local, el nombre de host puede estar vacío, use el nombre de ruta en su lugar
//     if (window.location.hostname === '') {
//         return window.location.href.replace(/\/(project-page-simple\.html|index\.html).*/, "");
//     }
//     return `https://${window.location.hostname}`
// }

// function getProjectIDFromURL() {
//     // Check search URL part and extract Project ID
//     searchURLMatch = window.location.search.match(/project_id=(\d+)/);

//     // If we couldn't obtain the ID, return null to show a 404 error
//     if (searchURLMatch === null || searchURLMatch.length < 2) {
//         redirectNoContent();
//     }

//     // Return matching group with search ID
//     return searchURLMatch[1];
// }

// function printMainProject(project) {
//     document.querySelector('#project-article h1').textContent = project.name;

//     document.querySelector('#project-article .project-subtitle .body-intro').textContent = project.description;
//     document.querySelector('#project-article .project-subtitle .body-intro-light span').textContent = project.completed_on;

//     document.querySelector('#project-article .project-image img').src = project.image;

//     document.querySelector('#project-article .project-description p').innerHTML = project.content;
// }
// function printOtherProjects(projects) {
//     // Shuffle projects randomly
//     projects = projects.map(value => ({ value, sort: Math.random() }))
//         .sort((a, b) => a.sort - b.sort)
//         .map(({ value }) => value);

//     document.querySelectorAll('.projects.projects-wrapper .container').forEach((el, idx) => {
//         el.querySelector('img').src = projects[idx].image;
//         el.querySelector('h4').textContent = projects[idx].name;
//         el.querySelector('p').textContent = projects[idx].description;
//         el.querySelector('a').href = `${getHostname()}/project.html?project_id=${projects[idx].uuid}`
//     })

// }

// async function showProjects() {
//     // Fetch projects json
//     projects = await fetchData();

//     // Obtain Project ID from search part from the URL
//     mainProjectID = getProjectIDFromURL();

//     // Obtain desired Project
//     mainProject = projects.filter(project => project.uuid == mainProjectID)?.[0];
//     if (mainProject === undefined) {
//         redirectNoContent();
//     }

//     // Print projects
//     printMainProject(mainProject);
//     printOtherProjects(projects.filter(project => project.uuid != mainProjectID));
// }

// async function showProjectsIndex() {
//     // Fetch projects json
//     projects = await fetchData();

//     // Print projects
//     printOtherProjects(projects);
// }



// if (window.location.href.match(/project\.html/)) {
//     window.addEventListener('load', showProjects);
// } else {
//     window.addEventListener('load', showProjectsIndex);
// }

