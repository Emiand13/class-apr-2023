
// Iteracion 1
const user = {
    name: "John Smith",
    id: 12345,
  };
   
  // Iteracion 2
  const libro1 = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "9798439311422",
    category: "Classic Literature",
  };
   
  const libro2 = {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    isbn: "9781250788450",
    category: "Philosophical novel",
  };
   
  // Iteracion 3
  user.libros = [libro1, libro2];
   
  // Iteracion 4
  const libreria = [];
  libreria.push(user);
   
  // Iteracion 5
  const libro3 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "0743273567",
    category: "Classic Literature",
  };
   
  libreria[0].libros.push(libro3);
   
  // Bonus iteracion 6
  for (let i = 0; i < libreria.length; i++) {
    const libreriaUser = libreria[i].name; 
    console.log(`${libreriaUser}'s libros:`);
    
    for (let j = 0; j < libreria[i].libros.length; j++) {
      const title = libreria[i].libros[j].title;
      const author = libreria[i].libros[j].author;
      
      console.log(`- ${title}, ${author}`);
    }
  }