import { Order } from './classes/order';
import { ShoppingCart } from './classes/shopping-cart';
import { Message } from './services/message';
import { Persistence } from './services/persistence';
import { Product } from './classes/product';
import { NoDiscount } from './classes/discounnt';

const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const message = new Message();
const persistence = new Persistence();
const order = new Order(shoppingCart, message, persistence);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lápis', 1.59));
// shoppingCart.clear();

console.log(order.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
order.checkout();
console.log(order.orderStatus);
