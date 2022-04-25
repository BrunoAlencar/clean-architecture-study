import { isValidCPF } from './cpf';
import { OrderDiscount } from './OrderDiscount';
import { ProductItem } from './ProductItem';

export class Order {
  constructor(
    private cpf: string,
    public productItems: ProductItem[],
    private orderDiscount?: OrderDiscount
  ) {
    if (!isValidCPF(this.cpf)) {
      throw new Error('Order CPF is not valid');
    }
  }

  addProductItem(productItem: ProductItem) {
    this.productItems.push(productItem);
  }

  addProductItems(productItems: ProductItem[]) {
    this.productItems.push(...productItems);
  }

  getFinalValueAfterDiscount() {
    const totalValue = this.getTotalValue();
    if (!this.orderDiscount) {
      return totalValue;
    }

    const valueToDiscount = this.orderDiscount.getDiscount(totalValue);

    return totalValue - valueToDiscount;
  }

  getTotalValue() {
    const total = this.productItems.reduce((accumulator, currentProduct) => {
      return accumulator + currentProduct.getTotalPrice();
    }, 0);

    return total;
  }

  setOrderDiscount(orderDiscount: OrderDiscount) {
    this.orderDiscount = orderDiscount;
  }
}
