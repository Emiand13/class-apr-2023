

// Desestructuración de objetos

const data = {
    name: {
      firstName: "ana",
      lastName: "marino",
    },
    isStudent: true,
    favoriteFootballTeam: "fc barcelona",
    hometown: {
      city: "buenos aires",
      country: "argentina",
    },
  };

  const {
    name: { firstName, lastName },
    favoriteFootballTeam,
    hometown: { city, country },
  } = data;
  
  console.log(`El estudiante ${firstName} ${lastName} de ${city} (${country}) ama al equipo ${favoriteFootballTeam}.`);
  