import Observer from "./observer/observer";

export default class User extends Observer {
  constructor(name, email) {
    super();
    if (arguments.length < 1) {
      throw new Error("At least one argument is required");
    } else if (email != undefined) {
      this.name = name;
      this.email = email;
    } else {
      this.name = name;
    }
  }

  update(model) {
    console.log(`${model.name} update!`);
    console.log(`${this.name}, ${model.name} has changed its value!`);
    console.log(`New price: ${model.price}`);
  }
}
