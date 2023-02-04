/**
 * @description Return boolean value that indicates whether the postal code is in standard format.
 * @param {string} postalCode "00000-000"
 * @returns {boolean}
 * @example
 *
 * ```js
 * const isValidPostalCode = validatePostalCode('00000-00') // false
 * const isValidPostalCode = validatePostalCode('00000-000') // true
 * ```
 */
export function validatePostalCode(postalCode: string) {
  const regexp = /^[0-9]{5}-[0-9]{3}$/;
  const isPostalCodeValid = regexp.test(postalCode);
  return isPostalCodeValid;
}
