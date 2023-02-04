import type { YupObjectsReturns } from '~/@models/YupObjectsReturns';

/**
 * @description Returns an Object that indicates whether the CPF number (individual registration) is valid.
 * @param {string} rawCpf '123.456.789-00'
 * @returns {YupObjectsReturns} { isValid: boolean, errorMessage?: string }
 * @example
 *
 * ```js
 * const isValidCPF = isCPF('123.456.789-00') // { isValid: false, errorMessage: 'CPF inválido'}
 * const isValidCPF = isCPF('157.406.800-85') // { isValid: true}
 * ```
 */
export default (rawCpf: string): YupObjectsReturns => {
  const onlyNumbersCPF = rawCpf.replace(/\D/g, '');
  if (isInvalidLength(onlyNumbersCPF))
    return {
      isValid: false,
      errorMessage: 'CPF inválido',
    };
  if (allDigitsTheSame(onlyNumbersCPF))
    return {
      isValid: false,
      errorMessage: 'CPF inválido',
    };
  const firstDigit = calculateDigit(onlyNumbersCPF, 10);
  const secondDigit = calculateDigit(onlyNumbersCPF, 11);
  const actualDigit = extractDigits(onlyNumbersCPF);
  const validatedDigit = `${firstDigit}${secondDigit}`;
  const isValid = actualDigit === validatedDigit;
  if (isValid) return { isValid: true };
  return {
    isValid: false,
    errorMessage: 'CPF inválido',
  };
};

function calculateDigit(cpf: string, factor: number) {
  let total = 0;
  for (const digit of cpf) {
    if (factor > 1) total += parseInt(digit) * factor--;
  }
  const rest = total % 11;
  return rest < 2 ? 0 : 11 - rest;
}

function isInvalidLength(cpf: string) {
  return cpf.length !== 11;
}

function allDigitsTheSame(cpf: string) {
  const [firstDigit] = cpf;
  return [...cpf].every(digit => digit === firstDigit);
}

function extractDigits(cpf: string) {
  return cpf.slice(9);
}
