export default class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer, areEqual) {
    if (typeof areEqual === "function") {
      this.observers = this.observers.filter((o) => !areEqual(o, observer));
    } else {
      throw new Error("A function is required");
    }
  }

  notify() {
    this.observers.forEach((o) => o.update(this));
  }
}
