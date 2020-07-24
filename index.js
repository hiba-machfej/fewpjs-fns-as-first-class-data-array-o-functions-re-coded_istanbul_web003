function wakeDog(dogName, dogBreed) {
    let step1 = `Wake ${dogName} the ${dogBreed}`;
        console.log(step1);
        return step1;
     }
  
  
  function leashDog(dogName, dogBreed) {
    let step2 =`Leash ${dogName} the ${dogBreed}`;
      console.log(step2);
      return step2;
    }
  
  function walkToPark(dogName, dogBreed) {
   let step3 = `Walk to the park with ${dogName} the ${dogBreed}`
      console.log(step3);
      return step3;
    }
  
  function throwFrisbee(dogName, dogBreed) {
    let step4 = `Throw the frisbee for ${dogName} the ${dogBreed}`
      console.log(step4);
      return step4;
    }
  function walkHome(dogName, dogBreed) {
   let step5 = `Walk home with ${dogName} the ${dogBreed}`;
      console.log(step5);
      return step5;
    }
  
  function unleashDog(dogName, dogBreed) {
   let step6 = `Unleash ${dogName} the ${dogBreed}`
      console.log(step6);
       return step6;
    }
  
  let routine = [wakeDog,leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
  
  function exerciseDog(dogName, dogBreed) {
      let routineResult = [];
      for (let i = 0; i < routine.length ; i++) {
      let routineStep = routine[i]; 
     
      routineResult.push(routineStep(dogName, dogBreed));
      
    }
    return routineResult;
  }
  
  exerciseDog("Byron","poodle");
  
  
  
  //unleashDog('dogName', 'dogBreed')