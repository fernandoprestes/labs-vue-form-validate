import type { YupObjectsReturns } from '~/@models/YupObjectsReturns';

/**
 * @description Returns an Object that indicates whether a person's name has the minimum number of characters and has a middle name.
 * @param {string} fullName John Doe
 * @returns {YupObjectsReturns} { isValid: boolean, errorMessage?: string }
 * @example
 *
 * ```js
 * const isValidFullName = isFullName('John') // { isValid: false, errorMessage: 'Obrigatório nome e sobrenome'}
 * const isValidFullName = isFullName('John D') // { isValid: false, errorMessage: 'Obrigatório nome e sobrenome'}
 * const isValidFullName = isFullName('John Doe') // { isValid: true}
 * ```
 */

export default (fullName: string): YupObjectsReturns => {
  const regexp = /^([a-zA-Z]{2,})+\s+([a-zA-Z\s]{2,})+$/i;
  const isNameValid = regexp.test(fullName);
  if (isNameValid) return { isValid: true };
  return {
    isValid: false,
    errorMessage: 'Obrigatório nome e sobrenome',
  };
};
