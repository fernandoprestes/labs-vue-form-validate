<script setup lang="ts">
  import { Form } from 'vee-validate';

  import BaseInputVue from '~/components/BaseInput.vue';

  import { addressValidationSchema } from './useValidationSchema';
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
    :validation-schema="addressValidationSchema"
    @submit="onSubmit"
    @invalid-submit="onInvalidSubmit"
  >
    <div class="grid grid-cols-12 gap-4">
      <BaseInputVue
        v-model="formData.postalCode"
        v-maska
        name="postalCode"
        label="CEP*"
        class="col-span-4"
        data-maska="#####-###"
        placeholder="00000-000"
      />
    </div>
    <div class="grid grid-cols-12 gap-4">
      <BaseInputVue
        v-model="formData.address"
        name="address"
        label="Endereço*"
        class="col-span-10"
        placeholder="Seu endereço"
      />
      <BaseInputVue
        v-model="formData.number"
        name="number"
        label="Numero"
        class="col-span-2"
        placeholder="0000"
      />
    </div>
    <div class="grid grid-cols-12 gap-4">
      <BaseInputVue
        v-model="formData.district"
        name="district"
        label="Bairro*"
        class="col-span-6"
        placeholder="Seu bairro"
      />
      <BaseInputVue
        v-model="formData.city"
        name="city"
        label="Cidade*"
        class="col-span-4"
        placeholder="Sua cidade"
      />
      <BaseInputVue
        v-model="formData.state"
        v-maska
        name="state"
        label="UF*"
        class="col-span-2"
        data-maska="@@"
        placeholder="AA"
      />
    </div>
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
