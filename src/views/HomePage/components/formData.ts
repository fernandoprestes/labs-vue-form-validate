import { reactive } from 'vue';

export const FormPersonalData = reactive({
  fullName: '',
  individualRegistration: '',
  generalRecord: '',
  age: 0,
  birthDate: '',
  phone: '',
});

export const FormAddressData = reactive({
  postalCode: '',
  address: '',
  district: '',
  number: '',
  city: '',
  state: '',
});

export const FormCredentialData = reactive({
  email: '',
  password: '',
});
