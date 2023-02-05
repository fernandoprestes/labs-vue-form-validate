import { it, expect } from 'vitest';
import ValidateFullName from '~/composables/useValidators/yup/ValidateFullName';

const VALID_FULL_NAME = ['Lu Bu', 'John Doe', 'Quinn Ken'];

it.each(VALID_FULL_NAME)('should validate a truthy Full Name', function (fullName: string) {
  const isValidFullName = ValidateFullName(fullName);
  expect(isValidFullName.isValid).toBeTruthy();
});

const INVALID_FULL_NAME = ['John', 'A A', 'La B'];

it.each(INVALID_FULL_NAME)('should validate a Full Name incomplete', function (fullName: string) {
  const isValidFullName = ValidateFullName(fullName);
  expect(isValidFullName.isValid).toBeFalsy();
});
