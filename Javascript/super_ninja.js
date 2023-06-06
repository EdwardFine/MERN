class Ninja{
    constructor(name){
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`${this.name} greets you.`);
    }
    showStats(){
        console.log(`Name: ${this.name}\nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}`);
    }
    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log(`"What one programmer can do in one month, two programmers can do in two months."`)
    }
    showStats(){
        super.showStats();
        console.log(`Wisdom: ${this.wisdom}`)
    }
}

const ninja1 = new Ninja("Hyabusa");
const sensei1 = new Sensei("Ronnie");
sensei1.speakWisdom();
sensei1.showStats();