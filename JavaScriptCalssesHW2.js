class Governor {
  constructor(name,formerProfession, party, age){
    this.name = name
    this.formerProfession = formerProfession
    this.party = party
    this.age = age
  }
  static party () {
    return ['Independent','Republican','Democrat'];
  }

  static age (age) {
    return age>35;
  }
  
  speech () {
    console.log(`For 6 months of the year, I live in the Baja. I have 1000 gallons of potable water and a silo of tortillas`);
  }
}

const governorInstance = new Governor('Jesse Ventura','Pro Wrestler','Independent',47);

console.log(governorInstance);
governorInstance.speech();

//Base Class = Person
// Think of three properties all people share, set them with the constructor
// Think of three methods all people share
// Create a PostalWorker class that inherits from person, add some methods
// Create a Chef class that inherits from person, add some methods
// Create 2 PostalWorkers and 2 Chefs, log them and test all their methods

class Person {
  constructor( name,favoriteFood,energy,uniform){
    this.name = name
    this.favoriteFood = favoriteFood
    this.energy = energy
    this.uniform = uniform
  }
  Eat(){
    console.log(`${this.name} is eating ${this.favoriteFood}`);
  }

  Sleep() {
    this.energy +=100
    console.log(`${this.name} got some sleep.`);
  }

  dress() {
    console.log(`${this.name} is wearing ${this.uniform} today`);
  }
}

class PostalWorker extends Person {
  collectMail() {
    console.log(`${this.name} is gathering mail from each box`);
  }

  deliverMail() {
    console.log(`${this.name} is delivering mail to each box`);
  }
}

class Chef extends Person {
  newMenu () {
    console.log(`Chef ${this.name} is reimagining the seasonal menu`);
  }

  review () {
    console.log(`Chef ${this.name} has to read all of the reviews`);
  }
}

const pman1 = new PostalWorker ('Sunday','Ice Cream',75,' a postal uniform');
const pman2 = new PostalWorker ('Daniel','pasta',82,'a postal uniform');
const chef1 = new Chef('Tina', 'Tangerine Tango', 78,'apron');
const chef2 = new Chef('Clyde', 'Chile', 67,'apron')

console.log(chef1,chef2,pman1,pman2);

pman1.collectMail();
pman2.deliverMail();
chef1.newMenu();
chef2.review();
pman2.dress();
chef2.dress();
chef1.Eat();
chef1.Sleep();
