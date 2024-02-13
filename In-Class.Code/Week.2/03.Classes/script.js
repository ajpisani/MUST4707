//Let's make some objects again!
import { Train } from "./Train.js";

const train1 = new Train("SEPTA Train", 30, "electric", "philadelphians");
const train2 = new Train("Amtrak", 7, "diesel", "Mail");
const train3 = new Train(
  "LIRR",
  4,
  "Electric 3rd Rail / Diesel, Long Islanders"
);
const train4 = new Train("BSL", 2, "nobody knowa 4 sure", "philadelphians");

const metaTrain = {
  size: "huge",
  powerSource: "coal",
  numCars: 10,
  caboose: true,
  cargo: "HO Scale Model Trains",

  go: function () {
    console.log("chugga chugga chugga");
  },

  derail: function () {
    console.log("aw crud");
  },

  stop: function () {
    console.log("train has stopped, the doors are opening");
  },

  getInfo: function () {
    console.log(
      `this train is ${this.size}. It is has ${this.numCars} cars. It is powered by ${this.powerScoure}`
    );
  },
};

const ajTrain = {
  size: "huge",
  powerSource: "electric",
  numCars: 18,
  caboose: false,
  cargo:
    "1x baggage car, 5x coach class cars, 3x dining/cafe cars, 6x sleeper cars, 2x dome cars, 1x observation car.",

  go: function () {
    console.log("chugga chugga chugga");
  },

  derail: function () {
    console.log("aw crud");
  },

  stop: function () {
    console.log("train has stopped, the doors are opening");
  },

  getInfo: function () {
    console.log(
      `this train is ${this.size}. It is has ${this.numCars} cars. It is powered by ${this.powerScoure}`
    );
  },
};
