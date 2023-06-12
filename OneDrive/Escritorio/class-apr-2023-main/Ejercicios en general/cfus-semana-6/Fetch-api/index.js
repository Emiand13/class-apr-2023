
// CFU: Fetch API

      // step 1 creamos una funcion llamada ""
function getTodos() {
    return fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {

     // Step 2
            if (!response.ok) {
                throw Error("Failed to get todos data");
            }
            return response.json();
        })
        .catch((err) => {
     // Step 4
            console.log(err.message);
        });
}

    // Step 3
getTodos()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err.message);
    });