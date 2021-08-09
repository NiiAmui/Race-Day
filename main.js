let raceNumber = Math.floor(Math.random() * 1000);
let earlyRunner = false;
const runnerAge = 15;

if (runnerAge > 18 && earlyRunner){
  raceNumber += 1000;
} 


if(runnerAge >18 && earlyRunner){
  console.log(`${raceNumber} You will race at 9:30am`);
}else if(runnerAge >18 && !earlyRunner){
  console.log(`${raceNumber} will race at 11:00 am`);
}else if(runnerAge < 18){
  console.log(`${raceNumber} You will race at 12:30 pm`);
}else{
  console.log(`See the registration desk`)
}

