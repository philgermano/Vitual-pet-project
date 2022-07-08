//console.log("buffalo");
////requirements

//game object that will hold game functions that are not directly within the pet and hold relevant player data such as possible score or any modifiers to the world. stuff like background could work as well. 

// a pet class that will be used to make the pet. 

//////TO DO. Make age have a slot on the stat bar. Maybe also pet name. 
/////Need to spawn in a pet image and delete the make pet button on clicking of the new pet button
///// find better assets to use. Maybe make myself.
//////make pet button not centered on mac screen. can do 50% but account for the width of the button to actually make it direct center of playpen.

let statTime = "";
let aniTime = "";
    //needed to declare the variable outside of the function so that clearInterval could target it and stop the timer.
let baseTime = 5000;
let eggImg = ["art/egg/egg1.png", "art/egg/egg2.png", "art/egg/egg3.png", "art/egg/egg4.png"]
let slime =["art/pet1/sprite bad.png", "art/pet1/sprite bad.png", "art/pet1/sprite bad.png","art/pet1/sprite bad.png"]

let petIn = 0;
let petState = "egg";
let sprite = eggImg;

//can change what array sprite points to so everything can be done with one timer


//base value declarations above this line
///////////////////////////////////////////

const spawnPet = () =>{
    //change img to hatched pet and start new timer for animations and change frames. 
    petState = "idle";
    let petSpr = document.querySelector("#petSprite");
    petSpr.src = "art/pet1/sprite bad.png";
}


const makePet = () =>{
    let name = prompt("What will you name your pet?", "spot"); 
     pet.name = name;
     let target = document.querySelector("#name")
     target.innerText = pet.name;
     //console.log(pet);
     timeStart();
         //pet sprite creation 
             const petSpr = document.createElement("img");
             petSpr.setAttribute("id", "petSprite");
             petSpr.setAttribute("class", "slideright");
             petSpr.style.width = "50px";
             petSpr.style.margin = "auto auto";
             ///setting initial state machine
             petState = "egg";
                     //find pet area and put pet in it.
                     const playPen = document.querySelector("#petZone");
                     playPen.append(petSpr);
                     startBut.remove();
                         animationGo();
 }
 //names pet, starts stat up timer, makes egg img and starts the hatch animation,  

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

const animationGo = () =>{
    aniTime = setInterval(()=>{
        let petSpr = document.querySelector("#petSprite");
        petSpr.src = sprite[petIn];   
        //can clean up by having it check for state and advance. then if at end of image array change state and/or reset index to 0
        if (petState === "egg"){
            if(petIn < 3){
                petIn++;
            } else{ 
                //increment image index array. if at end hatch egg and change state to first monster form
                alert("Your egg is hatching!!")
                petIn = 0;
                sprite = slime;
                petState = "slime";
                
            }
        }else if (sprite === slime){
                let petSpr = document.querySelector("#petSprite");
                petSpr.style.animation = "monster 4s infinite";
                //petSpr.style.animation = "example 4s infinite";
                //works as example with color change. gotta figure why movement isn't
                //console.log(petSpr)       

                if(petIn < 3){
                    petIn++;
                } else{ 
                    petIn = 0;
                    //increments index if not at image array end. if at end go back to start
            }
            //console.log(sprite);
            //console.log(petSpr);
            //console.log(petState);
         }
        } , 1000)

}
///Boosts up states and checks for if pet dies    


const timeStart =() =>{
    clearInterval(statTime);
    statTime = setInterval(statUp, (baseTime));
       //console.log(baseTime);
}//clock for all the stat and age ups. 


////////// functions above here
////////////////////////
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




// if (buttonRow = "settings"){
//     let tarBut = document.querySelector("#settings")
//     tarBut.innerText = settingMenu[4];
// }
// if (buttonRow = "main"){
//     let tarBut = document.querySelector("#settings")
//     tarBut.innerText = mainMenu[4];
// }
//CURRENTLY NOT FUNCTIONING. IGNORE UNTIL WE WANT TO TRY AND GET A SECOND LIST OF MENU OPTIONS UP AND RUNNING,