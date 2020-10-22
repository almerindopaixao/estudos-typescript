/*
Interface segregation principle (Princípio da segregação de interface)
Os clientes não devem ser forçados a utilizarem interfaces que não utilizam
*/

import { Order } from './classes/order';
import { ShoppingCart } from './classes/shopping-cart';
import { Message } from './services/message';
import { Persistence } from './services/persistence';
import { Product } from './classes/product';
import { NoDiscount } from './classes/discounnt';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';

const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const message = new Message();
const persistence = new Persistence();
const individualCustomer = new IndividualCustomer('almerindo', 'paixão', '088');
const enterpriseCustomer = new EnterpriseCustomer('Magalu', '0000000000');
const order = new Order(shoppingCart, message, persistence, individualCustomer);

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
