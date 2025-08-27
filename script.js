console.log('Importing Module');

// Importing from export
import { addToCart } from './shoppingCart.js';
import { totalPrice as price, tq, cart } from './shoppingCart.js';

addToCart('bread', 5);
console.log(price, tq);

// Import all from export
import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('apple', 4);
console.log(ShoppingCart.totalPrice);

// From default export
import add from './shoppingCart.js';

add('pizza', 2);
add('bread', 2);
add('apple', 3);
console.log(cart);

// Top Level Await but block the execution
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

// calling an async always return a promise, data not yet arrive
// const lastPost = await getLastPost();
// console.log(lastPost);
// getLastPost().then(data => console.log(data));
(async function () {
  const lastPost = await getLastPost();
  console.log(lastPost);
})();

// // Module Pattern
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);

// Common JS Modules
// Export
// export.addToCarty = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };
// };

// // Import
// const {addToCarty} = require('./shoppingCart.js');

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
stateClone.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);

// Maintain the state of the page
if (module.hot) {
  module.hot.accept();
}
