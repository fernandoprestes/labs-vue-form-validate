export function validateEmail(email: string) {
  const regexp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const isEmailValid = regexp.test(email);
  return isEmailValid;
}
export function validadePassword(password: string) {
  const regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
  const isPasswordStrong = regexp.test(password);
  return isPasswordStrong;
}

export function validateFullName(fullName: string) {
  const regexp = /^([a-zA-Z]{2,})+\s+([a-zA-Z\s]{2,})+$/i;
  const isNameValid = regexp.test(fullName);
  if (isNameValid) return { isValid: true };
  return {
    isValid: false,
    errorMessage: 'Obrigatório nome e sobrenome',
  };
}

export function validatePostalCode(postalCode: string) {
  const regexp = /^[0-9]{5}-[0-9]{3}$/;
  const isPostalCodeValid = regexp.test(postalCode);
  return isPostalCodeValid;
}

export function validateCPF(rawCpf: string) {
  const onlyNumbersCPF = rawCpf.replace(/\D/g, '');
  if (isInvalidLength(onlyNumbersCPF))
    return {
      isValid: false,
      errorMessage: 'CPF invalido',
    };
  if (allDigitsTheSame(onlyNumbersCPF))
    return {
      isValid: false,
      errorMessage: 'CPF invalido',
    };
  const firstDigit = calculateDigit(onlyNumbersCPF, 10);
  const secondDigit = calculateDigit(onlyNumbersCPF, 11);
  const actualDigit = extractDigits(onlyNumbersCPF);
  const validatedDigit = `${firstDigit}${secondDigit}`;
  const isValid = actualDigit === validatedDigit;
  if (isValid) return { isValid: true };
  return {
    isValid: false,
    errorMessage: 'CPF invalido',
  };
}

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
