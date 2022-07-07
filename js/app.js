//console.log("buffalo");
////requirements

//game object that will hold game functions that are not directly within the pet and hold relevant player data such as possible score or any modifiers to the world. stuff like background could work as well. 

// a pet class that will be used to make the pet. 

//////TO DO. Make age have a slot on the stat bar. Maybe also pet name. 
/////Need to spawn in a pet image and delete the make pet button on clicking of the new pet button
///// find better assets to use. Maybe make myself.
//////make pet button not centered on mac screen. can do 50% but account for the width of the button to actually make it direct center of playpen.

let statTime = "";
    //needed to declare the variable outside of the function so that clearInterval could target it and stop the timer.

let baseTime = 5000;

//let buttonRow = "main";   
// const mainMenu = ["FEED", "NAP", "PLAY", "EXERCISE", "SETTINGS"];
// const settingMenu = ["SPEED UP", "SLOW DOWN", "SOMETHING", "WAHTEVER", "MAIN MENU"]; 
//was gonna swap inner text to the array for what buttons are up. didn;t work quickly so setting aside


//base value declarations above this line
///////////////////////////////////////////

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

const pet = new petBase(null) 

const makePet = () =>{
   let name = prompt("What will you name your pet?", "spot"); 
    pet.name = name;
    console.log(pet);
    timeStart();
        //pet sprite creation
        const petSpr = document.createElement("img")
        petSpr.src = "art/sprite bad.png";
        const playPen = document.querySelector("#petZone");
        //petSpr.style.height = "300px";
        petSpr.style.margin = "auto auto";
        playPen.append(petSpr)
        startBut.remove();
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

const fastBut = document.querySelector("#fast");
 fastBut.addEventListener("click",() =>{
    clearInterval(statTime);
    statTime = setInterval(statUp, (baseTime /= 2));
    console.log(baseTime);
});

const slowBut = document.querySelector("#slow");
 slowBut.addEventListener("click",() =>{clearInterval(statTime);
    statTime = setInterval(statUp, (baseTime *= 2));
    console.log(baseTime);
});

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
        
        if(pet.hunger > 9 || pet.sleepiness > 9 || pet.boredom > 9){
            alert(`${pet.name} is dead.`);
            clearInterval(statTime);
        }
}


const timeStart =() =>{
     clearInterval(statTime);
     statTime = setInterval(statUp, (baseTime));
        console.log(baseTime);
}//clock for all the stat and age ups. 

// if (buttonRow = "settings"){
//     let tarBut = document.querySelector("#settings")
//     tarBut.innerText = settingMenu[4];
// }
// if (buttonRow = "main"){
//     let tarBut = document.querySelector("#settings")
//     tarBut.innerText = mainMenu[4];
// }
//CURRENTLY NOT FUNCTIONING. IGNORE UNTIL WE WANT TO TRY AND GET A SECOND LIST OF MENU OPTIONS UP AND RUNNING,