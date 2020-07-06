import CryptoCurrency from "./currency.js";
import User from "./user.js";

const bitcoin = new CryptoCurrency("Bitcoin");
const ethereum = new CryptoCurrency("Ethereum");

const users = [];
users.push(new User("Jonas"));
users.push(new User("Martha"));

// Subscribe all users to the bitcoin currency
users.forEach((u) => bitcoin.subscribe(u));
// Subscribe the first user to the ethereum currency
ethereum.subscribe(users[0]);

for (let i = 0; i < 5; i++) {
  setTimeout(
    () => bitcoin.increment(Math.floor(Math.random() * 10)), // Random amount
    Math.floor(Math.random() * 10000) // Random waiting time
  );
  setTimeout(
    () => ethereum.decrement(Math.floor(Math.random() * 10)),
    Math.floor(Math.random() * 10000)
  );
}
