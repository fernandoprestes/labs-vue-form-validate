<script setup lang="ts">
  import { Form } from 'vee-validate';

  import BaseInputVue from '~/components/BaseInput.vue';

  import { personalValidationSchema } from './useValidationSchema';
  import { FormPersonalData } from './formData';

  const onInvalidSubmit = (errors: any) => {
    console.log(errors);
  };

  const emit = defineEmits(['on-validate-form']);
  const onSubmit = () => {
    emit('on-validate-form', 'FormAddress');
  };
</script>

<template>
  <Form
    :validation-schema="personalValidationSchema"
    class="border-primary-500 bg-primary-100 rounded border py-4 px-6"
    @submit="onSubmit"
    @invalid-submit="onInvalidSubmit"
  >
    <div class="grid">
      <BaseInputVue
        v-model="FormPersonalData.fullName"
        name="fullName"
        label="Nome completo*"
        placeholder="Seu nome completo"
      />
    </div>
    <div class="grid grid-cols-2 gap-4">
      <BaseInputVue
        v-model="FormPersonalData.individualRegistration"
        v-maska
        name="individualRegistration"
        label="CPF*"
        data-maska="###.###.###-##"
        placeholder="000.000.000-00"
      />
      <BaseInputVue
        v-model="FormPersonalData.generalRecord"
        v-maska
        name="generalRecord"
        label="RG"
        data-maska="##.###.###-#"
        placeholder="00.000.000-0"
      />
    </div>
    <div class="grid grid-cols-12 gap-4">
      <BaseInputVue
        v-model="FormPersonalData.age"
        v-maska
        name="age"
        label="Idade*"
        type="number"
        data-maska="##"
        class="col-span-4"
        placeholder="00"
      />
      <BaseInputVue
        v-model="FormPersonalData.birthDate"
        v-maska
        name="birthDate"
        label="Data de nascimento"
        data-maska="##/##/####"
        placeholder="00/00/0000"
        class="col-span-4"
      />
      <BaseInputVue
        v-model="FormPersonalData.phone"
        v-maska
        name="phone"
        label="Telefone/celular*"
        placeholder="(00) 0000-0000 / (00) 00000-0000"
        data-maska="['(##) ####-####', '(##) #####-####']"
        class="col-span-4"
      />
    </div>
    <div class="mt-8">
      <button
        id="button-submit"
        type="submit"
        class="bg-primary-500 text-primary-100 hover:(bg-primary-600) rounded px-4 py-2"
      >
        Continuar
      </button>
    </div>
  </Form>
</template>
