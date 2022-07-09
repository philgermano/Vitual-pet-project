let roomDark = false;
let gameStart = false;
let statTime = "";
let aniTime = "";
let ageInc = 0;
let animationTick = 1000;
    //needed to declare the variable outside of the function so that clearInterval could target it and stop the timer.
let baseTime = 20000;
let inputPause = 5000;
    //arrays of animation frames. time aniTime iterate through array to animate sprite.
let eggImg = ["art/egg/egg1.png", "art/egg/egg2.png", "art/egg/egg3.png",  "art/egg/egg4.png"]

let slime =["art/pet1/idle/slime-idle-0.png", "art/pet1/idle/slime-idle-1.png", "art/pet1/idle/slime-idle-2.png","art/pet1/idle/slime-idle-3.png"]

let deadSlime =["art/pet1/dead/slime-die-0.png", "art/pet1/dead/slime-die-1.png", "art/pet1/dead/slime-die-2.png", "art/pet1/dead/slime-die-3.png"]

let worm = ["art/pet 2/idle/tile000.png","art/pet 2/idle/tile001.png", "art/pet 2/idle/tile002.png", "art/pet 2/idle/tile003.png", "art/pet 2/idle/tile004.png", "art/pet 2/idle/tile005.png", "art/pet 2/idle/tile006.png", "art/pet 2/idle/tile007.png", "art/pet 2/idle/tile008.png"]

let deadWorm = ["art/pet 2/dead/dead000.png","art/pet 2/dead/dead001.png","art/pet 2/dead/dead002.png","art/pet 2/dead/dead003.png","art/pet 2/dead/dead004.png","art/pet 2/dead/dead005.png","art/pet 2/dead/dead006.png","art/pet 2/dead/dead007.png"]

let wormSleep = ["art/pet 2/sleep/sleep.png"]

let wormPlay = ["art/pet 2/play/tile000.png", "art/pet 2/play/tile001.png", "art/pet 2/play/tile002.png", "art/pet 2/play/tile003.png", "art/pet 2/play/tile004.png", "art/pet 2/play/tile005.png", "art/pet 2/play/tile006.png", "art/pet 2/play/tile007.png", "art/pet 2/play/tile008.png", "art/pet 2/play/tile009.png", "art/pet 2/play/tile010.png", "art/pet 2/play/tile012.png", "art/pet 2/play/tile013.png", "art/pet 2/play/tile014.png", "art/pet 2/play/tile015.png"]

let slimePlay = ["art/pet1/play/slime-attack-0.png", "art/pet1/play/slime-attack-1.png", "art/pet1/play/slime-attack-2.png", "art/pet1/play/slime-attack-3.png", "art/pet1/play/slime-attack-4.png"]
let petIn = 0;
let petState = "egg";
let sprite = eggImg;

let inputStop = false;

//base variable declarations above this line
///////////////////////////////////////////


const makePet = () =>{
     //console.log(pet);
         //pet sprite creation 
             alert("Good luck raising your pet. Keep its hunger, sleepiness, and boredom below 10 or it will die. Help it live a long life and who knows what it’ll grow into.\n\n\n Use the fast or slow buttons to bump the in game speed up or down. \n\n Please enjoy yourself.")
             gameStart = true;
                const petSpr = document.createElement("img");
                    petSpr.setAttribute("id", "petSprite");
                    petSpr.setAttribute("class", "slideright");
                        petSpr.style.width = "100px";
                        petSpr.style.margin = "auto auto";
             ///setting initial state machine
             petState = "egg";
                     //find pet area and put pet in it.
                     const playPen = document.querySelector("#petZone");
                     playPen.append(petSpr);
                     startBut.remove();
                         animationGo();
 }
 //names starts, makes egg img and starts the hatch animation,  

 const statUp = () =>{
        //every 2 cycles pet age increases
    ageInc++;
        if (ageInc === 2){
            pet.age++;
            ageInc = 0;
        };
        
            //boosts 3 states and updates meters with newer values. sets floor of 0 so numbers can't got negative
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
    let ageMeter = document.querySelector("#age");
        pet.age =  pet.age;
        ageMeter.innerText =pet.age;    
        
        if (pet.age >= 3 && petState === "slime"){
            alert(`${pet.name} is evolving.`)
            sprite = worm;
            petState = "worm";
            //let petSpr = document.querySelector("#petSprite");
        }; 
                //checks stats and if high enough pet dies.
        if(pet.hunger > 9 || pet.sleepiness > 9 || pet.boredom > 9){
            alert(`${pet.name} is dead.`);
            clearInterval(statTime);
            
                    //checks for current sprite and sets up appropriate death sprites.
            if (sprite === slime){ 
                    petState = "deadSlime";
                    petIn = 0;
                    sprite = deadSlime;
                    let petSpr = document.querySelector("#petSprite");
                    petSpr.style.animation = "";
                }else if (sprite === worm){
                    petState = "deadWorm";
                    petIn = 0;
                    sprite = deadWorm;
                    let petSpr = document.querySelector("#petSprite");
                    petSpr.style.animation = "";
                    //console.log(petState);
                    //console.log(sprite);
        } 
    }
}
        //runs animation. iterates through sprite arrays. covers egg hatching and naming.
const animationGo = () =>{
    clearInterval(aniTime);
        //for sprite animation
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
                timeStart();
                let name = prompt("What will you name your pet?", "Slib"); 
                pet.name = name;
                let target = document.querySelector("#name")
                target.innerText = pet.name;
                animationTick = 150;
                clearInterval(aniTime);
                animationGo();
            }
        }else if (petState === "slime"){
                let petSpr = document.querySelector("#petSprite");
                petSpr.style.animation = "monster 6s infinite";
                petSpr.style.animationTimingFunction= "linear";
                //console.log(petSpr)       

                if(petIn < 3){
                    petIn++;
                    //console.log(aniTime);
                } else{ 
                    petIn = 0;
                    //increments index if not at image array end. if at end go back to start
            }
            //console.log(sprite);
            //console.log(petSpr);
            //console.log(petState);
                    //runs through sprite array once if pet is dead. then stays on final death frame.
         } else if (petState === "deadSlime"){
            if(petIn < 3){
                petIn++
            }
         }else if (petState === "deadWorm"){
            if(petIn < 7){
                petIn++
            }
                    //increases size for worm sprite because it is small than the slime.
        }else if (petState === "worm"){
            let petSpr = document.querySelector("#petSprite");
            petSpr.style.height = "300px";
            petSpr.style.width = "300px";
            petSpr.style.animation = "monster 6s infinite";
            petSpr.style.animationTimingFunction= "linear";
            //petSpr.style.animation = "example 4s infinite";
            //works as example with color change. gotta figure why movement isn't
            //console.log(petSpr)       

            if(petIn < 8){
                petIn++;
                console.log(aniTime);
            } else{ 
                petIn = 0;
                //increments index if not at image array end. if at end go back to start
        }}else if (petState === "wormPlay"){

            sprite = wormPlay;
            // let petSpr = document.querySelector("#petSprite");
            // petSpr.style.height = "300px";
            // petSpr.style.width = "300px";
            // petSpr.style.animation = "monster 6s infinite";
            // petSpr.style.animationTimingFunction= "linear";
            //petSpr.style.animation = "example 4s infinite";
            //works as example with color change. gotta figure why movement isn't
            //console.log(petSpr)       

            if(petIn <= 14){
                petIn++;
                //console.log(aniTime);
            } else{ 
                petIn = 0;
                sprite = worm; 
                petSpr.src = sprite[petIn];
                petState = "worm";
                
        
            }
        }else if (petState === "slimePlay"){
            
            sprite = slimePlay;  
            let petSpr = document.querySelector("#petSprite");
            petSpr.style.animation = "monster 6s infinite";
            petSpr.style.animationTimingFunction= "linear";
            //console.log(petSpr)  
            //console.log(petSpr)       
                    //console.log("in play");
            if(petIn <= 4){
                //console.log("in play in <4");
                petIn++;
                //console.log(aniTime);
            } else{ 
                //console.log("in play log =4");
                petIn = 0;
                sprite = slime;
                petSpr.src = sprite[petIn];
                petState = "slime";          
                //increments index if not at image array end. if at end go back to start
        //console.log(sprite);
        //console.log(petSpr);
        //console.log(petState)
            }}
                //variable time to speed up after hatching.
        } , animationTick)

}

///Boosts up stats and checks for if pet dies    
const timeStart =() =>{
    clearInterval(statTime);
    statTime = setInterval(statUp, (baseTime));
       //console.log(baseTime);
}//clock for all the stat and age ups. 


////////// functions above here
////////////////////////
    //class with base stats meters run off and methods that decreases stats. are triggered on button presses.
class petBase{
    constructor(name) {
        this.name = name,
        this.hunger = 0,
        this.sleepiness = 0,
        this.boredom = 0,
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




////Event Listeners
////////////////////

    //Spawns initial pet in and starts everything
 const startBut = document.querySelector("#new-pet");
 startBut.addEventListener("click", makePet);

        //decreases hunger. button changes color for a split second to show it was clicked.
const feedBut = document.querySelector("#feed");
feedBut.addEventListener("click", ()=>{
    if(gameStart === true){
    pet.feed();
    feedBut.style.backgroundColor = 'grey';
    setTimeout(()=>{ feedBut.style.backgroundColor = 'aqua'}, 500)
    }});

        //decreases sleepiness.
const napBut = document.querySelector("#nap");
napBut.addEventListener("click", ()=>{
    if(gameStart === true){
    pet.nap();
    napBut.style.backgroundColor = 'grey';       
    setTimeout(()=>{ napBut.style.backgroundColor = 'aqua'}, 500)
        //DARKENS SCREEN AFTER PRESSING NAP sets sprite to a still sleeping one and stops movement.
        if (roomDark === false){
        clearInterval(aniTime);
        petIn = 0;
            if(petState === "worm" || petState === "wormPlay"){
                sprite = wormSleep;
                petIn = 0
                let petSpr = document.querySelector("#petSprite");
                petSpr.src = sprite[petIn]; 
            }else{
                state = "slime"
            }
        roomDark = true;
        const playPen = document.querySelector("#petZone");
        playPen.setAttribute("id", "petZoneDark")
        let petSpr = document.querySelector("#petSprite");
        petSpr.style.animation = "";
            //restarts animation and movement assume pet is not dead.
    setTimeout(()=>{  
        if(petState !== "slimeDead" && petState !== "wormDead"){
            playPen.setAttribute("id", "petZone");
            petSpr.style.animation = "monster";
            roomDark = false;
                if(sprite === wormSleep){
                    sprite = worm;
                };
            animationGo(); }}, 2000)
    }}});
            //decreases boredom
const playBut = document.querySelector("#play");
    playBut.addEventListener("click", ()=>{
    if(gameStart === true){
        pet.play();
        playBut.style.backgroundColor = 'grey';
        if (petState === "slime"){ 
            petState = "slimePlay"
            petIn = 0
        }else if(petState === "worm") {
            petIn = 0;
            petState = "wormPlay";
        }      
        setTimeout(()=>{ playBut.style.backgroundColor = 'aqua'}, 500)
    }});
    
            //speeds up internal clock that time stat increase
const fastBut = document.querySelector("#fast");
 fastBut.addEventListener("click",() =>{
    if(gameStart === true){
        clearInterval(statTime);
        statTime = setInterval(statUp, (baseTime /= 2));
        console.log(baseTime);
        fastBut.style.backgroundColor = 'grey';
        setTimeout(()=>{ fastBut.style.backgroundColor = 'aqua'}, 500)
        }
});
        //slows down internal clock that controls stat increases.
const slowBut = document.querySelector("#slow");+
            slowBut.addEventListener("click",() =>{
        if(gameStart === true){
            clearInterval(statTime);
            statTime = setInterval(statUp, (baseTime *= 2));
            console.log(baseTime);
            slowBut.style.backgroundColor = 'grey';
            setTimeout(()=>{ slowBut.style.backgroundColor = 'aqua'}, 500)
}});


///////////
/////
/////TO DO.
// TO DO:
// Set in timer for button inputs lockout.
// every button press set lockout by inputTime so othe buttons don't function. so that different keyframes can be used for sleeping or eating.