import Observer from "./observer/observer.js";

export default class User extends Observer {
  constructor(name) {
    super();
    if (arguments.length < 1) {
      throw new Error("At least one argument is required");
    } else {
      this.name = name;
    }
  }

  update(model) {
    console.log(
      `%c${model.name} update!`,
      `color: ${model.color}; font-weight: bold`
    );
    console.log(`${this.name}, ${model.name} has changed its value!`);
    console.log(`New price: ${model.price}`);
  }
}
