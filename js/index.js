import CryptoCurrency from "./currency";
import User from "./user";

const bitcoin = new CryptoCurrency("Bitcoin");
const ethereum = new CryptoCurrency("Ethereum");

const users = [];
users.push(new User("Jonas"));
users.push(new User("Martha"));

// Subscribe all users to the bitcoin currency
users.forEach(u => bitcoin.subscribe(u));
// Subscribe the first user to the ethereum currency
ethereum.subscribe(users[0]);