// Car Objects
let car1 = {
  name: "Corolla",
  brand: "Toyota",
  model: "2022",
  color: "Red",
  weight: "1500kg",
  displayProperties: function() {
      return `This car is a ${this.color} ${this.brand} ${this.name} from ${this.model} and weighs ${this.weight}.`;
  }
};

let car2 = {
  name: "Civic",
  brand: "Honda",
  model: "2021",
  color: "Black",
  weight: "1450kg",
  displayProperties: function() {
      return `This car is a ${this.color} ${this.brand} ${this.name} from ${this.model} and weighs ${this.weight}.`;
  }
};

let car3 = {
  name: "Mustang",
  brand: "Ford",
  model: "2023",
  color: "Blue",
  weight: "1700kg",
  displayProperties: function() {
      return `This car is a ${this.color} ${this.brand} ${this.name} from ${this.model} and weighs ${this.weight}.`;
  }
};

// Animal Objects
let animal1 = {
  name: "Bobby",
  type: "Dog",
  color: "Brown",
  weight: "20kg",
  age: "3 years",
  displayProperties: function() {
      return `This animal is a ${this.color} ${this.type} named ${this.name}, weighs ${this.weight} and is ${this.age} old.`;
  }
};

let animal2 = {
  name: "Molly",
  type: "Cat",
  color: "White",
  weight: "8kg",
  age: "2 years",
  displayProperties: function() {
      return `This animal is a ${this.color} ${this.type} named ${this.name}, weighs ${this.weight} and is ${this.age} old.`;
  }
};

let animal3 = {
  name: "Oscar",
  type: "Bird",
  color: "Green",
  weight: "0.5kg",
  age: "1 year",
  displayProperties: function() {
      return `This animal is a ${this.color} ${this.type} named ${this.name}, weighs ${this.weight} and is ${this.age} old.`;
  }
};

// Person Objects
let person1 = {
  name: "John",
  age: "25 years",
  color: "White",
  weight: "70kg",
  job: "Engineer",
  displayProperties: function() {
      return `This person is ${this.name}, a ${this.color} ${this.job}, who is ${this.age} old and weighs ${this.weight}.`;
  }
};

let person2 = {
  name: "Sarah",
  age: "30 years",
  color: "White",
  weight: "60kg",
  job: "Doctor",
  displayProperties: function() {
      return `This person is ${this.name}, a ${this.color} ${this.job}, who is ${this.age} old and weighs ${this.weight}.`;
  }
};

let person3 = {
  name: "Mike",
  age: "35 years",
  color: "White",
  weight: "80kg",
  job: "Teacher",
  displayProperties: function() {
      return `This person is ${this.name}, a ${this.color} ${this.job}, who is ${this.age} old and weighs ${this.weight}.`;
  }
};

// Displaying properties in the browser
document.write(car1.displayProperties() + "<br>");
document.write(car2.displayProperties() + "<br>");
document.write(car3.displayProperties() + "<br>");

document.write(animal1.displayProperties() + "<br>");
document.write(animal2.displayProperties() + "<br>");
document.write(animal3.displayProperties() + "<br>");

document.write(person1.displayProperties() + "<br>");
document.write(person2.displayProperties() + "<br>");
document.write(person3.displayProperties() + "<br>");
