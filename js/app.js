//console.log("buffalo");
////requirements

//game object that will hold game functions that are not directly within the pet and hold relevant player data such as possible score or any modifiers to the world. stuff like background could work as well. 

// a pet class that will be used to make the pet. 


class petBase{
    constructor(name) {
        this.name = name,
        this.hunger = 5,
        this.sleepiness = 5,
        this.boredom = 5,
        this.age = 0
    }

    feed(){
        this.hunger--;
        let foodMeter = document.querySelector("#hunger");
        this.hunger = Math.max(0, this.hunger);
        foodMeter.innerText = this.hunger;
    }
    nap(){
        this.sleepiness--
        let sleepMeter = document.querySelector("#sleepiness");
        this.sleepiness = Math.max(0, this.sleepiness);
        sleepMeter.innerText =this.sleepiness;
    }
    play(){
        this.boredom--
        let dullMeter = document.querySelector("#boredom");
        this.boredom = Math.max(0, this.boredom);
        dullMeter.innerText = this.boredom;
    }
}

const pet = new petBase("")   

const makePet = () =>{
   let name = prompt("What will you name your pet?", "spot"); 
    pet.name = name;
    console.log(pet);
}


//let name = prompt("What will you name your pet?", "spot")

    //let pet = new petBase("whatever")

 const startBut = document.querySelector("#new-pet");
 startBut.addEventListener("click", makePet);

const feedBut = document.querySelector("#feed");
feedBut.addEventListener("click", ()=>pet.feed());

const napBut = document.querySelector("#nap");
napBut.addEventListener("click", ()=>pet.nap());

const playBut = document.querySelector("#play");
playBut.addEventListener("click", ()=>pet.play());

const statUp = () =>{

    pet.age++;
    pet.boredom++;
        let dullMeter = document.querySelector("#boredom");
        pet.boredom = Math.max(0, pet.boredom);
        dullMeter.innerText = pet.boredom;
    pet.hunger++;
    let foodMeter = document.querySelector("#hunger");
        pet.hunger = Math.max(0, pet.hunger);
        foodMeter.innerText = pet.hunger;
    pet.sleepiness++;    
        let sleepMeter = document.querySelector("#sleepiness");
        pet.sleepiness = Math.max(0, pet.sleepiness);
        sleepMeter.innerText =pet.sleepiness;
}

const statTime = setInterval(statUp, 1000);

