/**
 * @description Returns a boolean value that indicates whether the email is in the pattern.
 * @param {string} email "john.doe@email.test"
 * @returns {boolean}
 * @example
 *
 * ```js
 * const isValidEmail = validateEmail('john.doeemail') // false
 * const isValidEmail = validateEmail('john.doe@email.test') // true
 * ```
 */

export function validateEmail(email: string): boolean {
  const regexp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const isEmailValid = regexp.test(email);
  return isEmailValid;
}
