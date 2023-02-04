/**
 * @description Returns a boolean value indicating whether the password is strong and in the pattern.
 * @param {string} password "str0ngP@ssW0rd"
 * @returns {boolean}
 * @example
 *
 * ```js
 * const isValidPassword = validatePassword('str0ngP@ssW0rd') // true
 * ```
 */

export function validadePassword(password: string): boolean {
  const regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
  const isPasswordStrong = regexp.test(password);
  return isPasswordStrong;
}
