


var wakeDog = function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
  }

  var leashDog = function leashDog(dogName, dogBreed) {
      console.log(`Leash ${dogName} the ${dogBreed}`);
      return `Leash ${dogName} the ${dogBreed}`
  }

  var walkToPark = function walkToPark(dogName, dogBreed) {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`
}

var throwFrisbee = function throwFrisbee(dogName, dogBreed) {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}


var walkHome = function walkHome(dogName, dogBreed) {
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return `Walk home with ${dogName} the ${dogBreed}`
}

var unleashDog = function unleashDog(dogName, dogBreed) {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`
}

var routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]
  
function exerciseDog(dogName, dogBreed) {
    const new_array = []
      for (var i = 0; i < routine.length; i++) {
        new_array.push(routine[i](dogName,dogBreed))
      }
      return new_array
      
  }    
  exerciseDog("jerry", "terrier")
  
//   console.log("Wake Byron the poodle");
//   console.log("Leash Byron the poodle");
//   console.log("Walk to the park with Byron the poodle");
//   console.log("Throw the frisbee for Byron the poodle");
//   console.log("Walk home with Byron the poodle");
//   console.log("Unleash Byron the poodle");
  