<script setup lang="ts">
  import { Form } from 'vee-validate';

  import BaseInputVue from '~/components/BaseInput.vue';

  import { addressValidationSchema } from './useValidationSchema';
  import { FormAddressData } from './formData';

  const emit = defineEmits(['on-validate-form']);
  const handleBackForm = () => {
    emit('on-validate-form', 'FormPersonal');
  };

  const onSubmit = () => {
    emit('on-validate-form', 'FormCredential');
  };

  const onInvalidSubmit = (errors: any) => {
    console.log(errors);
  };
</script>

<template>
  <Form
    :validation-schema="addressValidationSchema"
    class="border-primary-500 bg-primary-100 rounded border py-4 px-6"
    @submit="onSubmit"
    @invalid-submit="onInvalidSubmit"
  >
    <div class="grid grid-cols-12 gap-4">
      <BaseInputVue
        v-model="FormAddressData.postalCode"
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
        v-model="FormAddressData.address"
        name="address"
        label="Endereço*"
        class="col-span-10"
        placeholder="Seu endereço"
      />
      <BaseInputVue
        v-model="FormAddressData.number"
        name="number"
        label="Numero"
        class="col-span-2"
        placeholder="0000"
      />
    </div>
    <div class="grid grid-cols-12 gap-4">
      <BaseInputVue
        v-model="FormAddressData.district"
        name="district"
        label="Bairro*"
        class="col-span-6"
        placeholder="Seu bairro"
      />
      <BaseInputVue
        v-model="FormAddressData.city"
        name="city"
        label="Cidade*"
        class="col-span-4"
        placeholder="Sua cidade"
      />
      <BaseInputVue
        v-model="FormAddressData.state"
        v-maska
        name="state"
        label="UF*"
        class="col-span-2"
        data-maska="@@"
        placeholder="AA"
      />
    </div>
    <div class="mt-8 flex justify-between">
      <button
        type="submit"
        class="text-primary-500 bg-primary-100 hover:(text-primary-600) border-primary-500 rounded border px-4 py-2"
        @click="handleBackForm"
      >
        Voltar
      </button>
      <button
        id="button-submit"
        type="submit"
        class="bg-primary-500 text-primary-100 hover:(bg-primary-600) rounded border px-4 py-2"
      >
        Continuar
      </button>
    </div>
  </Form>
</template>
