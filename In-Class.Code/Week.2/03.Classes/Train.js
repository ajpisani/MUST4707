class Train {
  constructor(name, numberCars, powerType, cargo) {
    this.name = name;
    this.numCars = numberCars;
    this.powerScource = powerType;
    this.cargo = cargo;
    this.caboose = false;
  }

  go() {
    console.log("chugga chugga");
  }

  derail() {
    console.log("aw crud");
  }

  stop() {
    console.log("train has stopped, the doors are opening");
  }

  getInfo() {
    console.log(
      `this train is ${this.size}. It is has ${this.numCars} cars. It is powered by ${this.powerScoure}`
    );
  }

  addCars(num) {
    this.numCars = this.numCars + num;
  }
}

class Bike {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }

  go() {
    console.log("pedal pedal pedal");
  }
  wheelie() {
    console.log("weeeeeeee");
  }

  paint(newColor) {
    console.log(`this bike is now ${this.color}`);
  }
}

export { Train };
