import * as Yup from 'yup';
import * as zod from 'zod';
import { toFormValidator } from '@vee-validate/zod';

import validateCPF from '~/composables/useValidators/yup/ValidateCPF';
import validateFullName from '~/composables/useValidators/yup/ValidateFullName';
import { validadePassword, validateEmail, validatePostalCode } from '~/composables/useValidators/zod';

export const personalValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .test('validade-full-name', function (value) {
      const validation = validateFullName(value || '');
      if (!validation.isValid) {
        return this.createError({
          path: this.path,
          message: validation.errorMessage,
        });
      }
      return true;
    })
    .required('O nome é obrigatório'),
  individualRegistration: Yup.string().test('validate-individual-registration', function (value) {
    const validation = validateCPF(value || '');
    if (!validation.isValid) {
      return this.createError({
        path: this.path,
        message: validation.errorMessage,
      });
    }
    return true;
  }),
  generalRecord: Yup.string().notRequired(),
  age: Yup.number().typeError('Deve ser um numero').required('A idade é obrigatória'),
  birthDate: Yup.string().notRequired(),
  phone: Yup.string().min(14, 'Telefone/celular incompleto').max(15).required('Um telefone é obrigatório'),
});

export const addressValidationSchema = toFormValidator(
  zod.object({
    postalCode: zod.string().refine(validatePostalCode, 'CEP é obrigatório'),
    address: zod.string().trim().min(1, 'Endereço é obrigatório'),
    number: zod.string().optional(),
    district: zod.string().min(1, 'O bairro é obrigatório'),
    city: zod.string().min(1, 'A cidade é obrigatório'),
    state: zod.string().min(1, 'A UF é obrigatório'),
  }),
);

export const credentialValidationSchema = toFormValidator(
  zod.object({
    email: zod.string().refine(validateEmail, 'Um email valido é obrigatório'),
    password: zod.string().trim().refine(validadePassword, 'Uma senha forte é obrigatória'),
  }),
);
