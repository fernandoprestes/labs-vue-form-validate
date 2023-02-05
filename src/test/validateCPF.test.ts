import { it, expect } from 'vitest';
import validateCPF from '~/composables/useValidators/yup/ValidateCPF';

const VALID_CPF = ['987.654.321-00', '714.602.380-01', '313.030.210-72', '144.796.170-60'];

it.each(VALID_CPF)('should validate a truthy CPF', function (cpf: string) {
  const isValidCPF = validateCPF(cpf);
  expect(isValidCPF.isValid).toBeTruthy();
});

const INVALID_CPF = [
  '111.111.111-11',
  '222.222.222-22',
  '333.333.333-33',
  '444.444.444-44',
  '555.555.555-55',
  '666.666.666-66',
  '777.777.777-77',
  '888.888.888-88',
  '999.999.999-99',
  '987.654.321-01',
  '714.602.380-10',
  '313.030.210-70',
  '144.796.170-10',
];

it.each(INVALID_CPF)('should validate a falsy CPF', function (cpf: string) {
  const isValidCPF = validateCPF(cpf);
  expect(isValidCPF.isValid).toBeFalsy();
});
