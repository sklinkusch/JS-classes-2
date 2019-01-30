class Animal {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(`Hello, I'm ${this.name}.`);
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let felix = new Animal("Felix");
let snoop = new Dog("Snoop");
felix.sayHi();
snoop.sayHi();
felix.speak();
snoop.speak();
