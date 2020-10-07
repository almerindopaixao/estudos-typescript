type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return parseFloat(
      this._items.reduce((tot, value) => tot + value.price, 0).toFixed(2),
    );
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';

    this.sendMessage(
      `Seu pedido com total de R$${this.total()} foi recebido com sucesso`,
    );
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log(`Mensagem enviada: ${msg}`);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  clear(): void {
    this._items.length = 0;
    console.log('Carrinho de compras foi limpo');
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Camiseta', price: 49.9 });
shoppingCart.addItem({ name: 'Caderno', price: 9.9 });
shoppingCart.addItem({ name: 'Lápis', price: 1.59 });
// shoppingCart.clear();

console.log(shoppingCart.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
