class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        if(target instanceof Unit){
            target.res -= this.power
            if(target.res <=0){
                target.handleDeath();
            }else{
                target.showStats()
            }
        }else{
            throw new Error("Target must be a unit!")
        }
    }
    showStats(){
        console.log(`Name: ${this.name}\nPower: ${this.power}\nResilience: ${this.res}\n`);
    }
    handleDeath(){
        console.log(`${this.name} has died!`)
    }
}

class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        if(stat.toLowerCase() == 'power' || stat.toLowerCase() == 'res'){
            this.stat = stat.toLowerCase();
        }else{
            throw new Error("Stat must be power or res.")
        }
        this.magnitude = magnitude;
        this.text = text;
    }
    play(target){
        if(target instanceof Unit){
            this.stat == 'power'? target.power += this.magnitude : target.res += this.magnitude;
            target.showStats();
        }
        else{
            throw new Error("Target much be a unit!")
        }
    }
}

const unit1 = new Unit("Red Belt Ninja",3,3,4);
const effect1 = new Effect("Hard Algorithm",2,"Increase target's resilience by 3","res",3);
effect1.play(unit1);
const unit2 = new Unit("Black Belt Ninja",4,5,4);
const effect2 = new Effect("Unhandled Promise Rejection",1,"Reduce target's resilience by 2","res",-2);
effect2.play(unit1);
const effect3 = new Effect("Pair Programming",3,"Increases the target's power by 2",'power',2);
effect3.play(unit1);
unit1.attack(unit2);
