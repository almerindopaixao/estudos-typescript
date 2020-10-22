export abstract class Discount {
  protected discount = 0;
  calculate(price: number): unknown {
    return price - price * this.discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;

  calculate(price: number): string {
    return '';
  }
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;

  calculate(price: number): boolean {
    return true;
  }
}

export class NoDiscount extends Discount {
  calculate(price: number): number {
    return price;
  }
}
