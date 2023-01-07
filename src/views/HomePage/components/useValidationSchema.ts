import * as Yup from 'yup';
import { validateFullName, validateCPF } from '~/composables/useValidators';

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
