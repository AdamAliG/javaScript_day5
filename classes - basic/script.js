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

let car1 = new Car("Corolla", "Toyota", "2022", "Red", "1500kg");
let car2 = new Car("Civic", "Honda", "2021", "Black", "1450kg");
let car3 = new Car("Mustang", "Ford", "2023", "Blue", "1700kg");

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

let animal1 = new Animal("Bobby", "Dog", "Brown", "20kg", "3 years");
let animal2 = new Animal("Molly", "Cat", "White", "8kg", "2 years");
let animal3 = new Animal("Oscar", "Bird", "Green", "0.5kg", "1 year");

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

let person1 = new Person("John", "White", "70kg", "25 years", "Engineer");
let person2 = new Person("Sarah", "White", "60kg", "30 years", "Doctor");
let person3 = new Person("Mike", "White", "80kg", "35 years", "Teacher");

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
