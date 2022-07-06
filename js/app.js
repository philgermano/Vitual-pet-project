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
        this.hunger--
    }
    nap(){
        this.sleepiness--
    }
    play(){
        this.boredom--
    }
}

const makePet = () =>{
   let name = prompt("What will you name your pet?", "spot")

    let pet = new petBase(name)     

    console.log(pet);
}

const startBut = document.querySelector("#new-pet");
startBut.addEventListener("click", makePet);

