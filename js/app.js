//console.log("buffalo");
////requirements

//game object that will hold game functions that are not directly within the pet and hold relevant player data such as possible score or any modifiers to the world. stuff like background could work as well. 

// a pet class that will be used to make the pet. 

//////TO DO. Make age have a slot on the stat bar. Maybe also pet name. 
/////Need to spawn in a pet image and delete the make pet button on clicking of the new pet button
///// find better assets to use. Maybe make myself.
//////make pet button not centered on mac screen. can do 50% but account for the width of the button to actually make it direct center of playpen.
let roomDark = false;
let statTime = "";
let aniTime = "";
let animationTick = 1000;
    //needed to declare the variable outside of the function so that clearInterval could target it and stop the timer.
let baseTime = 5000;
let eggImg = ["art/egg/egg1.png", "art/egg/egg2.png", "art/egg/egg3.png",  "art/egg/egg4.png"]

let slime =["art/pet1/idle/slime-idle-0.png", "art/pet1/idle/slime-idle-1.png", "art/pet1/idle/slime-idle-2.png","art/pet1/idle/slime-idle-3.png"]

let deadSlime =["art/pet1/dead/slime-die-0.png", "art/pet1/dead/slime-die-1.png", "art/pet1/dead/slime-die-2.png", "art/pet1/dead/slime-die-3.png"]

let worm = ["art/pet 2/idle/tile000.png","art/pet 2/idle/tile001.png", "art/pet 2/idle/tile002.png", "art/pet 2/idle/tile003.png", "art/pet 2/idle/tile004.png", "art/pet 2/idle/tile005.png", "art/pet 2/idle/tile006.png", "art/pet 2/idle/tile007.png", "art/pet 2/idle/tile008.png"]

let deadWorm = ["art/pet 2/dead/dead000.png","art/pet 2/dead/dead001.png","art/pet 2/dead/dead002.png","art/pet 2/dead/dead003.png","art/pet 2/dead/dead004.png","art/pet 2/dead/dead005.png","art/pet 2/dead/dead006.png","art/pet 2/dead/dead007.png"]

let wormSleep = ["art/pet 2/sleep/sleep.png"]

let petIn = 0;
let petState = "egg";
let sprite = eggImg;

//can change what array sprite points to so everything can be done with one timer


//base value declarations above this line
///////////////////////////////////////////

// const spawnPet = () =>{
//     //change img to hatched pet and start new timer for animations and change frames. 
//     petState = "idle";
//     let petSpr = document.querySelector("#petSprite");
//     petSpr.src = "art/pet1/sprite bad.png";
// }


const makePet = () =>{
     //console.log(pet);
         //pet sprite creation 
             alert("Good luck raising your pet. Keep its hunger, sleepiness, and boredom below 10 or it will die. Help it live a long life and who knows what it’ll grow into.\n\n\n Use the fast or slow buttons to bump the in game speed up or down. \n\n Please enjoy yourself.")
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
    let ageMeter = document.querySelector("#age");
        pet.age =  pet.age;
        ageMeter.innerText =pet.age;    
        
        if (pet.age >= 20 && petState === "slime"){
            alert(`${pet.name} is evolving.`)
            sprite = worm;
            petState = "worm";
            let petSpr = document.querySelector("#petSprite");
        }; 
        
        if(pet.hunger > 9 || pet.sleepiness > 9 || pet.boredom > 9){
            alert(`${pet.name} is dead.`);
            clearInterval(statTime);
            

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
                    console.log(petState);
                    console.log(sprite);
        } 
    }
}
 
const animationGo = () =>{
    clearInterval(aniTime);
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
                //petSpr.style.animation = "example 4s infinite";
                //works as example with color change. gotta figure why movement isn't
                //console.log(petSpr)       

                if(petIn < 3){
                    petIn++;
                    console.log(aniTime);
                } else{ 
                    petIn = 0;
                    //increments index if not at image array end. if at end go back to start
            }
            //console.log(sprite);
            //console.log(petSpr);
            //console.log(petState);
         } else if (petState === "deadSlime"){
            if(petIn < 3){
                petIn++
            }
         }else if (petState === "deadWorm"){
            if(petIn < 7){
                petIn++
            }
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
        }
        //console.log(sprite);
        //console.log(petSpr);
        //console.log(petState)
     }
        
        } , animationTick)

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
feedBut.addEventListener("click", ()=>{
    pet.feed();
    feedBut.style.backgroundColor = 'grey';
    setTimeout(()=>{ feedBut.style.backgroundColor = 'aqua'}, 500)
    });

const napBut = document.querySelector("#nap");
napBut.addEventListener("click", ()=>{
    pet.nap();
    napBut.style.backgroundColor = 'grey';
    setTimeout(()=>{ napBut.style.backgroundColor = 'aqua'}, 500)
        //DARKENS SCREEN AFTER PRESSING NAP
        if (roomDark === false){
        clearInterval(aniTime);
            if(petState === "worm"){
                sprite = wormSleep;
                petIn = 0
                let petSpr = document.querySelector("#petSprite");
                petSpr.src = sprite[petIn]; 
            }
        roomDark = true;
        const playPen = document.querySelector("#petZone");
        playPen.setAttribute("id", "petZoneDark")
        let petSpr = document.querySelector("#petSprite");
            petSpr.style.animation = "";
    setTimeout(()=>{  
        if(petState !== "slimeDead" && petState !== "wormDead"){
            playPen.setAttribute("id", "petZone");
            petSpr.style.animation = "monster";
            roomDark = false;
                if(sprite === wormSleep){
                    sprite = worm;
                };
            animationGo(); }}, 2000)
    }});

const playBut = document.querySelector("#play");
playBut.addEventListener("click", ()=>{
    pet.play();
    playBut.style.backgroundColor = 'grey';
    setTimeout(()=>{ playBut.style.backgroundColor = 'aqua'}, 500)
    });

const fastBut = document.querySelector("#fast");
 fastBut.addEventListener("click",() =>{
    clearInterval(statTime);
    statTime = setInterval(statUp, (baseTime /= 2));
    console.log(baseTime);
    fastBut.style.backgroundColor = 'grey';
    setTimeout(()=>{ fastBut.style.backgroundColor = 'aqua'}, 500)
});

const slowBut = document.querySelector("#slow");
 slowBut.addEventListener("click",() =>{clearInterval(statTime);
    statTime = setInterval(statUp, (baseTime *= 2));
    console.log(baseTime);
    slowBut.style.backgroundColor = 'grey';
    setTimeout(()=>{ slowBut.style.backgroundColor = 'aqua'}, 500)
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