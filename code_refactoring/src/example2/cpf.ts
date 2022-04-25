// @ts-nocheck

export function isValidCPF(cpf) {
  const MIN_LENGTH_CPF = 11;
  const MAX_LENGTH_CPF = 14;

  const isValidStringCPF =
    cpf && cpf.length >= MIN_LENGTH_CPF && cpf.length <= MAX_LENGTH_CPF;
  if (!isValidStringCPF) {
    return false;
  }
  cpf = cpf.replace('.', '').replace('.', '').replace('-', '').replace(' ', '');
  const isEveryCharacterRepeated = cpf.split('').every((c) => c === cpf[0]);
  if (isEveryCharacterRepeated) {
    return false;
  }
  let firstDigitCalculation, secondDigitCalculation;
  let firstDigitResult, secondDigitResult, rest;

  firstDigitCalculation =
    secondDigitCalculation =
    firstDigitResult =
    secondDigitResult =
    rest =
      0;

  for (let nCount = 1; nCount < cpf.length - 1; nCount++) {
    if (isNaN(parseInt(cpf.substring(nCount - 1, nCount)))) {
      return false;
    }

    const currentDigit = parseInt(cpf.substring(nCount - 1, nCount));
    firstDigitCalculation =
      firstDigitCalculation + (11 - nCount) * currentDigit;

    secondDigitCalculation =
      secondDigitCalculation + (12 - nCount) * currentDigit;
  }

  rest = firstDigitCalculation % 11;

  firstDigitResult = rest < 2 ? 0 : 11 - rest;
  secondDigitCalculation += 2 * firstDigitResult;
  rest = secondDigitCalculation % 11;
  secondDigitResult = rest < 2 ? 0 : 11 - rest;

  const lastTwoDigits = cpf.substring(cpf.length - 2, cpf.length);
  const lastTwoDigitsCalculated = `${firstDigitResult}${secondDigitResult}`;
  return lastTwoDigits == lastTwoDigitsCalculated;
}
