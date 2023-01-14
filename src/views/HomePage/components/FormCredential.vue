<script setup lang="ts">
  import { Form } from 'vee-validate';
  import { computed } from 'vue';

  import BaseInputVue from '~/components/BaseInput.vue';

  import { credentialValidationSchema } from './useValidationSchema';
  import { FormCredentialData } from './formData';

  const onInvalidSubmit = (errors: any) => {
    console.log(errors);
  };

  const onSubmit = () => {
    console.log(FormCredentialData);
  };

  const emit = defineEmits(['on-validate-form']);
  const handleBackForm = () => {
    emit('on-validate-form', 'FormAddress');
  };

  const hasAtLeastOneDigit = computed(() => {
    const regexp = /(?=.*\d)/;
    return regexp.test(FormCredentialData.password);
  });
  const hasAtLeastOneLowercaseLetter = computed(() => {
    const regexp = /(?=.*[a-z])/;
    return regexp.test(FormCredentialData.password);
  });
  const hasAtLeastOneUppercaseLetter = computed(() => {
    const regexp = /(?=.*[A-Z])/;
    return regexp.test(FormCredentialData.password);
  });
  const hasAtLeastOneSpecialCharacter = computed(() => {
    const regexp = /(?=.*[$*&@#])/;
    return regexp.test(FormCredentialData.password);
  });
  const hasAtLeastEightOfTheCaracteres = computed(() => {
    const regexp = /[0-9a-zA-Z$*&@#]{8,}/;
    return regexp.test(FormCredentialData.password);
  });
</script>

<template>
  <Form
    :validation-schema="credentialValidationSchema"
    class="border-primary-500 bg-primary-100 rounded border py-4 px-6"
    @submit="onSubmit"
    @invalid-submit="onInvalidSubmit"
  >
    <BaseInputVue
      v-model="FormCredentialData.email"
      name="email"
      label="Email*"
      placeholder="Seu e-mail: email@prov.com"
    />
    <BaseInputVue
      v-model="FormCredentialData.password"
      name="password"
      label="Senha*"
      type="password"
      placeholder="********"
    />
    <div class="ml-2 mt-4 flex flex-col">
      <div class="flex items-center gap-2">
        <div
          class="h-6 w-6"
          :class="hasAtLeastOneDigit ? 'i-ph-check-circle text-primary-500' : 'i-ph-circle-dashed text-gray'"
        />
        <p>Deve conter ao menos um dígito.</p>
      </div>
      <div class="flex items-center gap-2">
        <div
          class="h-6 w-6"
          :class="hasAtLeastOneLowercaseLetter ? 'i-ph-check-circle text-primary-500' : 'i-ph-circle-dashed text-gray'"
        />
        <p>Deve conter ao menos uma letra minúscula.</p>
      </div>
      <div class="flex items-center gap-2">
        <div
          class="h-6 w-6"
          :class="hasAtLeastOneUppercaseLetter ? 'i-ph-check-circle text-primary-500' : 'i-ph-circle-dashed text-gray'"
        />
        <p>Deve conter ao menos uma letra maiúscula.</p>
      </div>
      <div class="flex items-center gap-2">
        <div
          class="h-6 w-6"
          :class="hasAtLeastOneSpecialCharacter ? 'i-ph-check-circle text-primary-500' : 'i-ph-circle-dashed text-gray'"
        />
        <p>Deve conter ao menos um caractere especial.</p>
      </div>
      <div class="flex items-center gap-2">
        <div
          class="h-6 w-6"
          :class="
            hasAtLeastEightOfTheCaracteres ? 'i-ph-check-circle text-primary-500' : 'i-ph-circle-dashed text-gray'
          "
        />
        <p>Deve conter ao menos 8 dos caracteres.</p>
      </div>
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
        type="submit"
        class="bg-primary-500 text-primary-100 hover:(bg-primary-600) rounded border px-4 py-2"
      >
        Salvar
      </button>
    </div>
  </Form>
</template>
