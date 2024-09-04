export default class Animal {
    
    private maxSpeed: number
    private animalName: string
    private animalSpeed: number

    constructor(maxSpeed: number, animalName: string){
        this.maxSpeed = maxSpeed;
        this.animalName = animalName;
        this.animalSpeed = 0;

    }

    getSpeed(){
        if (this.animalSpeed != 0) {return this.animalSpeed}
        const newSpeed = Math.floor(Math.random() * this.maxSpeed) + 1;
        return this.animalSpeed = newSpeed
    }

    getName(){
        return this.animalName;
    }
}