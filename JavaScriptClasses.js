// //give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances


class Cat {
  constructor(name, pawColor,whiskerLength,) {
    this.name = name;
    this.pawColor = pawColor;
    this.whiskerLength = whiskerLength;
    this.energyLevel = 80;

  }
  Play() {
    this.energyLevel -= 10;
    console.log(`It's time to play with ${this.name}`);
  }

  Feed() {
    this.energyLevel += 20;
   console.log(`${this.name} is hungry`);
  }

  Sleep() {
    this.energyLevel = 100;
    console.log(`${this.name} is sleeping`);
  }
}
  const cat1 = new Cat('Milo','white','3 inches');

  const cat2 = new Cat('Tad','black','1 inch');
  


console.log(cat1);
console.log(cat2);
cat2.Play();
cat2.Sleep();
cat1.Feed();
console.log(cat1);
console.log(cat2);

//Pirates
// create 3 properties that are set by the constructor
// create 3 methods
// instantiate 2 arraysof 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
// loop over each array and print 3 properties of each pirate

class Pirate {
  constructor(names,ships,booty){
this.names = names;
this.ships = ships;
this.booty = booty;

  }
  find() {
    this.booty +=20;
    console.log(`${this.names} found ${this.booty}!`)
  }

  Sail() {
    const randomIndex = Math.floor(Math.random()*this.ships.length);
    const randomShip = this.ships[randomIndex];
    console.log(`${randomShip} is good to go!`);
  }

  theif() {
    this.booty -=50;
    console.log(`${this.names} had ${this.booty} stolen!`)
  }

  RollCall() {
    for (let i=0; i < this.names.length; i++){
      console.log(`${this.names[i]} sails on ${this.ships[i]} to get ${this.booty[i]}`);
    } 
  }
}

const jollyRoger= new Pirate (
['Bill','Bob','Boo'],
['Sail 1','Sail 2','Sail 3'],
[250, 500, 720]);

const blackPearl = new Pirate(
  ['Jack', 'Elizabeth', 'Will'],
  ['Black Pearl 1', 'Black Pearl 2', 'Black Pearl 3'],
  [100, 300, 600]
);

console.log(jollyRoger);
jollyRoger.RollCall();

console.log((blackPearl));
blackPearl.RollCall();
blackPearl.Sail();