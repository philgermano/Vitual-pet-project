# Vitual-pet-project
virtual pet project

Goal create a digital pet.

Requirements.
4 stats
	hunger -if maxed = death
	sleepiness -if maxed = death
	boredom -fi maxes = death
	age just increments as time passes

Buttons for
	feeding
	sleep
	play

Name pet at start

Pet must evolve or morph

Animate pet while it is alive. 
	can flip image by using css easily.
	keyframes to shift image around.
		might be able to use an animated gif set to essentially an idle animation


Possible add ons

Go with a tamagotchi mock up and the buttons on it have words. can use by clocking those options.
Could rock either flex box or grid.

Multiple pet options.
Pet sounds.
More activities for pet.
A shop with toys you can purchase for the pet as presents. - would require a way to get money.
Animated gif for pet

can use super with class to extend the class to have more properties on it.

So base pet. Then late could add in modifiers or whatever.

TASKS DONE
-----------
pet dies
pet gains stats and player can reduce them with clicks
player can name pet
start button deletes itself and pet image is spawned in
age displayed and increasing

TO DO
---------
make pet image wander the screen ***keyframes*** Sorta there needs improvement but base done. need to add more options in. set duration and can use a time to know when they finish. like if each pass takes 6 seconds.
Change background to fit napping vs eating
deploy to github pages(recording 7/6)

need new playzone background image. white box looks bad. needs to darken when pet sleep is hit. set a second mouth that is black and use background blur to blend them for darkness.

add detail to tamagatchi image background. stars or something.

set animations for pet will sleep and eat. use state machine to allow inputs only when awake

set up evolution to new sprite set and stuff when age reaches 10


CHALLENGES AND ISSUES
---------
Dont know how to spell(typos)
figuring out how to turn off setInterval when pet dies so it doesn't keep ticking up the boredom (timer was declared in a function initially so scope issues made me unable to locate it later to stop)
finding the right set of properties and wording to get the pet to move with keyframe animations.
set a ton of my css using vh and vw and ended up swapping it all to a set size when i noticed it adjusting poorly to my small laptop screen.

