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

test('should return cpf is invalid', () => {
  const result = validate(undefined);

  expect(result).toBe(false);
});

test('should return cpf is invalid', () => {
  const result = validate('319.956.164-00');

  expect(result).toBe(true);
});

test('should return cpf is invalid', () => {
  const result = validate('abc.dfe.ghi-jl');

  expect(result).toBe(false);
});

test('should return cpf is invalid', () => {
  expect(() => validate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toThrow(
    new Error('str.replace is not a function')
  );
});

test('should return cpf is invalid', () => {
  const result = validate('295$379\n955...93');

  expect(result).toBe(false);
});
