import { validate } from '../../src/example2/cpf';

test('should return cpf is valid', () => {
  const result = validate('108.908.334-35');

  expect(result).toBe(true);
});

test('should return cpf is valid', () => {
  const result = validate('111.444.777-35');

  expect(result).toBe(true);
});

test('should return cpf is invalid', () => {
  const result = validate('111.444.777-33');

  expect(result).toBe(false);
});

test('should return cpf is invalid', () => {
  const result = validate('111.444.777-333');

  expect(result).toBe(false);
});

test('should return cpf is invalid', () => {
  const result = validate('111.444.777-333333');

  expect(result).toBe(false);
});

test('should return cpf is invalid', () => {
  const result = validate('111.111.111-11');

  expect(result).toBe(false);
});

test('should return cpf is invalid', () => {
  const result = validate(null);

  expect(result).toBe(false);
});
