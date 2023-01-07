<script setup lang="ts">
  import { Form } from 'vee-validate';

  import BaseInputVue from '~/components/BaseInput.vue';

  import { personalValidationSchema } from './useValidationSchema';
  import { formData } from './formData';

  const onInvalidSubmit = (errors: any) => {
    console.log(errors);
  };

  const onSubmit = () => {
    console.log(formData);
  };
</script>

<template>
  <Form
    :validation-schema="personalValidationSchema"
    @submit="onSubmit"
    @invalid-submit="onInvalidSubmit"
  >
    <BaseInputVue
      v-model="formData.fullName"
      name="fullName"
      label="Nome completo*"
    />
    <BaseInputVue
      v-model="formData.individualRegistration"
      v-maska
      name="individualRegistration"
      label="CPF*"
      data-maska="###.###.###-##"
    />
    <BaseInputVue
      v-model="formData.generalRecord"
      v-maska
      name="generalRecord"
      label="RG"
      data-maska="##.###.###-#"
    />
    <BaseInputVue
      v-model="formData.age"
      v-maska
      name="age"
      label="Idade*"
      type="number"
      data-maska="##"
    />
    <BaseInputVue
      v-model="formData.birthDate"
      v-maska
      name="birthDate"
      label="Aniversario"
      data-maska="##/##/####"
    />
    <BaseInputVue
      v-model="formData.phone"
      v-maska
      name="phone"
      label="Telefone/celular"
      placeholder="(00) 0000-0000 / (00) 00000-0000"
      data-maska="['(##) ####-####', '(##) #####-####']"
    />
    <div class="mt-8">
      <button
        type="submit"
        class="bg-primary-500 text-primary-100 hover:(bg-primary-600) rounded px-4 py-2"
      >
        Continuar
      </button>
    </div>
  </Form>
</template>
