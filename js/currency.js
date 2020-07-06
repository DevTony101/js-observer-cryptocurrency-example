import Subject from "./observer/subject.js";

export default class CryptoCurrency extends Subject {
  constructor(name, startingPrice, color) {
    super();
    if (arguments.length < 1) {
      throw new Error("At least one argument is required");
    } else if (arguments.length == 1) {
      this.name = name;
      this.price = 10;
    } else {
      this.name = name;
      this.price = startingPrice;
      this.color = color;
    }
  }

  increment(amount) {
    if (typeof amount === "number") {
      this.price += amount;
      this.notify();
    } else {
      throw new Error("A number is required");
    }
  }

  decrement(amount) {
    if (typeof amount === "number") {
      this.price -= amount;
      this.notify();
    } else {
      throw new Error("A number is required");
    }
  }
}
