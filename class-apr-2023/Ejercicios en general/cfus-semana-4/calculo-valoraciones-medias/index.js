
// Reduce #2 - Cálculo de valoraciones medias


  const product = {
    name: "AmazonBasics Apple Certified Lightning to USB Cable",
    price: 7.99,
    manufacturer: "Amazon",
    reviews: [
      { user: "Pavel Nedved", comments: "Really good!", rate: 4 },
      { user: "Alvaro Trezeguet", comments: "It lasted 2 days", rate: 1 },
      { user: "David Recoba", comments: "Awesome", rate: 5 },
      { user: "Jose Romero", comments: "Good value for the money", rate: 4 },
      { user: "Antonio Cano", comments: "It broke really fast", rate: 2 }
    ]
  };
  
  const totalRate = product.reviews.reduce((sum, review) => sum + review.rate, 0);
  const averageRate = totalRate / product.reviews.length;
  
  console.log("La calificación promedio del producto es:", averageRate);