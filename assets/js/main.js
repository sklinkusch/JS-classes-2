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

let felix = new Animal("Felix");
let snoop = new Animal("Snoop");
felix.sayHi();
snoop.sayHi();
felix.speak();
snoop.speak();
