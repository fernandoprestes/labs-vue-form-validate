export function validateEmail(email: string) {
  const regexp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const isEmailValid = regexp.test(email);
  if (isEmailValid) return { isValid: true };
  return {
    isValid: false,
    errorMessage: 'Deve ser um email valido',
  };
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

export function validateCPF(rawCpf: string) {
  const cleanCpf = rawCpf.replace(/\D/g, '');
  if (isInvalidLength(cleanCpf))
    return {
      isValid: false,
      errorMessage: 'CPF invalido',
    };
  if (allDigitsTheSame(cleanCpf))
    return {
      isValid: false,
      errorMessage: 'CPF invalido',
    };
  const digit1 = calculateDigit(cleanCpf, 10);
  const digit2 = calculateDigit(cleanCpf, 11);
  const actualDigit = extractDigits(cleanCpf);
  const validatedDigit = `${digit1}${digit2}`;
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
