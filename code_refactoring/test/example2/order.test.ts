import { CouponOrderDiscount } from '../../src/example2/CouponOrderDiscount';
import { Order } from '../../src/example2/Order';
import { ProductItem } from '../../src/example2/ProductItem';

let productItems: ProductItem[];
let order: Order;
let userCPF: string;
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
  userCPF = '123.456.789-09';
  productItems = [productItem];
  order = new Order(userCPF, productItems);
});

test('should create an order', () => {
  expect(order).toBeInstanceOf(Order);
  expect(order.getTotalValue()).toBe(100);
});

test('should create an order with 3 items(with description, price and quantity)', () => {
  order.addProductItem(productItems[0]);
  order.addProductItems([productItems[0]]);
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

  expect(order.getTotalValue()).toBe(100);
  expect(order.getFinalValueAfterDiscount()).toBe(90);
});

test('should create an order and get valueAfterDiscountWithout any discount', () => {
  expect(order.getTotalValue()).toBe(100);
  expect(order.getFinalValueAfterDiscount()).toBe(100);
});

test('should return throw error when trying to create a order with invalid cpf', () => {
  userCPF = '111.111.111.-11';
  expect(() => new Order(userCPF, productItems)).toThrow(
    new Error('Order CPF is not valid')
  );
});
