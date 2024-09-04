import { NewLineKind } from "typescript";
import Animal from "./Animal";

export default class AnimalRacing {

    startRacing (animalList: Animal[]){
        let maxSpeed: number = 0
        let winner: Animal = animalList[0];
        animalList.forEach(animal => {
            console.log(`competitor: ${animal.getName()}; Speed: ${animal.getSpeed()}`)
            let curSpeed = animal.getSpeed();
            if ( curSpeed > maxSpeed ) {
                maxSpeed = curSpeed
                winner = animal;
            } 
        });

        return winner;
    }

}