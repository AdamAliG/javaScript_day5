// Car class
class Car {
  constructor(name, brand, model, color, weight) {
      this.name = name;
      this.brand = brand;
      this.model = model;
      this.color = color;
      this.weight = weight;
  }

  displayProperties() {
      return `This car is a ${this.color} ${this.brand} ${this.name} from ${this.model} and weighs ${this.weight}.`;
  }
}

// Motorbike class extending Car
class Motorbike extends Car {
  constructor(name, brand, model, color, weight, wheels) {
      super(name, brand, model, color, weight);
      this.wheels = wheels;
  }

  displayProperties() {
      return `This motorbike is a ${this.color} ${this.brand} ${this.name} from ${this.model}, weighs ${this.weight}, and has ${this.wheels} wheels.`;
  }
}

let bike1 = new Motorbike("Ninja", "Kawasaki", "2023", "Green", "200kg", 2);
let bike2 = new Motorbike("YZF-R1", "Yamaha", "2023", "Blue", "205kg", 2);
let bike3 = new Motorbike("Street Triple", "Triumph", "2023", "White", "190kg", 2);

// Animal class
class Animal {
  constructor(name, type, color, weight, age) {
      this.name = name;
      this.type = type;
      this.color = color;
      this.weight = weight;
      this.age = age;
  }

  displayProperties() {
      return `This animal is a ${this.color} ${this.type} named ${this.name}, weighs ${this.weight} and is ${this.age} old.`;
  }
}

// Fish class extending Animal
class Fish extends Animal {
  constructor(name, type, color, weight, age, waterType) {
      super(name, type, color, weight, age);
      this.waterType = waterType;
  }

  displayProperties() {
      return `This fish is a ${this.color} ${this.type} named ${this.name}, weighs ${this.weight}, is ${this.age} old and lives in ${this.waterType} water.`;
  }
}

let fish1 = new Fish("Nemo", "Clownfish", "Orange", "1kg", "2 years", "Saltwater");
let fish2 = new Fish("Dory", "Regal blue tang", "Blue", "1.5kg", "3 years", "Saltwater");
let fish3 = new Fish("Jaws", "Shark", "Grey", "1000kg", "20 years", "Saltwater");

// Person class
class Person {
  constructor(name, color, weight, age, job) {
      this.name = name;
      this.color = color;
      this.weight = weight;
      this.age = age;
      this.job = job;
  }

  displayProperties() {
      return `This person is ${this.name}, a ${this.color} ${this.job}, who is ${this.age} old and weighs ${this.weight}.`;
  }
}

// Profession class extending Person
class Profession extends Person {
  constructor(name, color, weight, age, job, position) {
      super(name, color, weight, age, job);
      this.position = position;
  }

  displayProperties() {
      return `This person is ${this.name}, a ${this.color} ${this.job}, who is ${this.age} old, weighs ${this.weight}, and works as a ${this.position}.`;
  }
}

let profession1 = new Profession("John", "White", "70kg", "25 years", "Engineer", "Software Engineer");
let profession2 = new Profession("Sarah", "White", "60kg", "30 years", "Doctor", "Pediatrician");
let profession3 = new Profession("Mike", "White", "80kg", "35 years", "Teacher", "Math Teacher");

// Displaying properties in the browser
document.write(bike1.displayProperties() + "<br>");
document.write(bike2.displayProperties() + "<br>");
document.write(bike3.displayProperties() + "<br>");

document.write(fish1.displayProperties() + "<br>");
document.write(fish2.displayProperties() + "<br>");
document.write(fish3.displayProperties() + "<br>");

document.write(profession1.displayProperties() + "<br>");
document.write(profession2.displayProperties() + "<br>");
document.write(profession3.displayProperties() + "<br>");
