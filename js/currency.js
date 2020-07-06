import Subject from "./observer/subject";

export default class CryptoCurrency extends Subject {
  constructor(name, startingPrice) {
    super();
    this.name = name;
    this.price = startingPrice;
  }

  increment(amount) {
    if (typeof amount == "number") {
      this.price += amount;
      this.notify();
    } else {
      throw new Error("A number is required");
    }
  }

  decrement(amount) {
    if (typeof amount == "number") {
      this.price -= amount;
      this.notify();
    } else {
      throw new Error("A number is required");
    }
  }
}
