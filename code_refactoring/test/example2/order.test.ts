import { CouponOrderDiscount } from '../../src/example2/CouponOrderDiscount';
import { Order } from '../../src/example2/Order';
import { ProductItem } from '../../src/example2/ProductItem';

let productItems: ProductItem[];
let order: Order;
beforeEach(() => {
  const productName = 'cheese';
  const productDescription = 'Milk derivative';
  const productPrice = 10.0;
  const productQuantity = 10;
  const productItem = new ProductItem(
    productName,
    productDescription,
    productPrice,
    productQuantity
  );
  const userCPF = '123.456.789-09';
  productItems = [productItem];
  order = new Order(userCPF, productItems);
});

test('should create an order', () => {
  expect(order).toBeInstanceOf(Order);
  expect(order.getTotalValue()).toBe(100);
});

test('should create an order with 3 items(with description, price and quantity)', () => {
  order.addProductItems([productItems[0], productItems[0]]);
  expect(order.productItems.length).toBe(3);
  expect(order.productItems).toEqual([
    expect.objectContaining({
      name: 'cheese',
      description: 'Milk derivative',
      price: 10,
      quantity: 10,
    }),
    expect.objectContaining({
      name: 'cheese',
      description: 'Milk derivative',
      price: 10,
      quantity: 10,
    }),
    expect.objectContaining({
      name: 'cheese',
      description: 'Milk derivative',
      price: 10,
      quantity: 10,
    }),
  ]);
});

test('should create an order with a coupon of discount of percentage', () => {
  const percentageOfDiscount = 10;
  const couponOrderDiscount = new CouponOrderDiscount(percentageOfDiscount);
  order.setOrderDiscount(couponOrderDiscount);
  console.log(order);

  expect(order.getTotalValue()).toBe(100);
  expect(order.getFinalValueAfterDiscount()).toBe(90);
});
