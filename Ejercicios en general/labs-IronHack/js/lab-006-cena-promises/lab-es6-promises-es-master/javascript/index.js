// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }
        )
      }
      )
    }
    )
  }
  )
}
)





// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>season steak generously with salt, pepper and garlic powder</li>`;
    return obtainInstruction('steak', 2);

  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>place in zip lock bag</li>`;
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>cook in sous vide at 120 F for 1-2 hours</li>`
    return obtainInstruction('steak', 4)
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>remove from bag and pat dry</li>`
    return obtainInstruction('steak', 5)
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>heat pan with grapeseed oil and a quarter stick of butter</li>`
    return obtainInstruction('steak', 6)
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>cook steak for 30-60 seconds per side using a spoon to baste with butter</li>`
    return obtainInstruction('steak', 7)
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>rest for 10 minutes</li>`
    document.querySelector("#steak").innerHTML += '<li>Steak is ready!</li>'
    document.querySelector("#steakImg").removeAttribute("hidden");
    
  })



// Iteration 3 using async/await



function obtainInstruction(veggie, step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${veggie} step ${step}`)
      ;
    }, 1000);
  });

}



let makebrocoli = async () => {
  try {
    let step1 = await obtainInstruction('broccoli', 0);
    document.querySelector("#broccoli").innerHTML += `<li>wash broccoli in cold water</li>`;

    let step2 = await obtainInstruction('broccoli', 1);
    document.querySelector("#broccoli").innerHTML += `<li>trim and cut the stalk in half, then finely slice it</li>`;

    let step3 = await obtainInstruction('broccoli', 2);
    document.querySelector("#broccoli").innerHTML += `<li>fill a pot with water, add a pinch of salt and bring to the boil</li>`;

    let step4 = await obtainInstruction('broccoli', 3);
    document.querySelector("#broccoli").innerHTML += `<li>once boiling, carefully lower the broccoli into the water</li>`;

    let step5 = await obtainInstruction('broccoli', 4);
    document.querySelector("#broccoli").innerHTML += `<li>cook for 3 to 4 minutes, or until tender</li>`;

    let step6 = await obtainInstruction('broccoli', 5);
    document.querySelector("#broccoli").innerHTML += `<li>drain, then leave to steam dry for a minute</li>`;

    let step7 = await obtainInstruction('broccoli', 6);
    document.querySelector("#broccoli").innerHTML += `<li>enjoy</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
    
  }
  catch (error) {
    document.querySelector('#broccoli').innerHTML = '<li>Hubo un error obteniendo los pasos. Inténtalo de nuevo.</li>';
  }

  }



makebrocoli();


// Bonus 2 - Promise all



function obtainInstruction(veggie, step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${veggie} step ${step}`)
      ;
    }, 1000);
  });

}

let makeBrusselsSprouts = async () => {

    let [step1, step2, step3, step4, step5, step6, step7, step8] = await Promise.all([
      obtainInstruction("brusselsSprouts", 0), 
      obtainInstruction("brusselsSprouts", 1),
      obtainInstruction("brusselsSprouts", 2), 
      obtainInstruction("brusselsSprouts", 3),
      obtainInstruction("brusselsSprouts", 4), 
      obtainInstruction("brusselsSprouts", 5),
      obtainInstruction("brusselsSprouts", 6), 
      obtainInstruction("brusselsSprouts", 7),
    ]);
    
    document.querySelector("#brusselsSprouts").innerHTML += `<li>wash brussels sprouts</li>`; 
    document.querySelector("#brusselsSprouts").innerHTML += `<li>cut off base and chop in half</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>toss in bowl with olive oil, balsamic vinegar and salt</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>preheat oven to 500 F</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>coat baking sheet with olive oil</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>roast in the oven for 20 minutes</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>place back in bowl and add salt and pepper</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>enjoy</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += '<li>Brussels sprouts are ready!</li>';
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  
  {
    console.log(err); 
    document.querySelector('#brusselsSprouts').innerHTML = '<li>Hubo un error obteniendo los pasos, Inténtalo de nuevo.</li>';
  };
  
  }

makeBrusselsSprouts();



// 'wash brussels sprouts',
// 'cut off base and chop in half',
// 'toss in bowl with olive oil, balsamic vinegar and salt',
// 'preheat oven to 500 F',
// 'coat baking sheet with olive oil',
// 'roast in the oven for 20 minutes',
// 'place back in bowl and add salt and pepper',
// 'enjoy'