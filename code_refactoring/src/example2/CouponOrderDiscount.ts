import { OrderDiscount } from './OrderDiscount';

export class CouponOrderDiscount implements OrderDiscount {
  constructor(private readonly discountCouponPercentage: number) {
    this.discountCouponPercentage = discountCouponPercentage / 100;
  }

  getDiscount(orderValue: number): number {
    const discount = orderValue * this.discountCouponPercentage;

    return discount;
  }
}
