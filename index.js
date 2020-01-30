let routine = [
    wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog
]

function exerciseDog(dogName, dogBreed){
    const successMessages = [];
    routine.forEach(function(element) {
        successMessages.push(element(dogName, dogBreed));
        console.log(successMessages)
        
    })
    return successMessages
}



function wakeDog(dogName, dogBreed) {
    let str = `Wake ${dogName} the ${dogBreed}`
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return str;
  }

function leashDog(dogName, dogBreed){
    let str = `Leash ${dogName} the ${dogBreed}`
    console.log(`Leash ${dogName} the ${dogBreed}`)
    return str
}

function walkToPark(dogName, dogBreed){
    let str = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`)
    return str
}

function throwFrisbee(dogName, dogBreed){
    let str = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
    return str
}


function walkHome(dogName, dogBreed){
    let str = `Walk home with ${dogName} the ${dogBreed}`
    console.log(`Walk home with ${dogName} the ${dogBreed}`)
    return str
}

function unleashDog(dogName, dogBreed){
    let str = `Unleash ${dogName} the ${dogBreed}`
    console.log(`Unleash ${dogName} the ${dogBreed}`)
    return str
}