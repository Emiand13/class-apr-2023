/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */
//funcion para acceder a una API externa

// Función para obtener 3 publicaciones de una API externa y mostrarlas en la página de inicio
document.addEventListener('DOMContentLoaded', function() {
   const get3Posts = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
         .then((response) => response.json())
         .then((data) => {
            const projectsContainer = document.querySelector('.projects-wrapper');
            for (let i = 0; i < 3; i++) {
               const post = data[i];
               const projectElement = document.createElement('div');
               projectElement.classList.add('container');
               projectElement.innerHTML = `
                  <img class="projects-img" src="./resources/images/projects-section/icons/${post.id}1.jpg" alt="">
                  <h3>${post.title}</h3>
                  <p>${post.body}</p>
                  <a href="index.html?p=${post.id}">Learn More</a>
               `;
               projectsContainer.appendChild(projectElement);
            }
         })
         .catch((error) => console.log(error));
   };

   window.addEventListener('load', get3Posts);
});
