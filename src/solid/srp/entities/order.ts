import { OrderStatus } from './interfaces/cart-item';
import { ShoppingCart } from './shopping-cart';
import { Message } from '../services/message';
import { Persistence } from '../services/persistence';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly message: Message,
    private readonly persistence: Persistence,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';

    this.message.sendMessage(
      `Seu pedido com total de R$${this.cart.total()} foi recebido com sucesso`,
    );
    this.persistence.saveOrder();
    this.cart.clear();
  }
}
