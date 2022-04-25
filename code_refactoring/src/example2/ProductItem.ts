export class ProductItem {
  constructor(
    readonly name: string,
    readonly description: string,
    readonly price: number,
    public quantity: number
  ) {}

  getTotalPrice() {
    return this.price * this.quantity;
  }
}
