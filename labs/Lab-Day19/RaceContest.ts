import Animal from "./Animal";
import AnimalRacing from "./AnimalRacing";
import { Dog } from "./Dog";
import { Horse } from "./Horse";
import { Tiger } from "./Tiger";


//init controller 
let runContest: AnimalRacing = new AnimalRacing;

//init data
let horseN1: Animal = new Horse("H1");
let dogN1: Animal = new Dog("D1");
let tigerN1:Animal = new Tiger("T1");

//Using controller to process data
let winner = runContest.startRacing([horseN1,dogN1,tigerN1]);
console.log(`Winner is ${winner.getName()}, with speed: ${winner.getSpeed()}`);