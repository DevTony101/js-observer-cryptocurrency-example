import CryptoCurrency from "./currency";
import User from "./user";

const bitcoin = new CryptoCurrency("Bitcoin");
const ethereum = new CryptoCurrency("Ethereum");

const users = [];
users.push(new User("Jonas"));
users.push(new User("Martha"));
