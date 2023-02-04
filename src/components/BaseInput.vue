<script setup lang="ts">
  import { toRef, computed } from 'vue';
  import { useField } from 'vee-validate';

  interface BaseInputProps {
    name: string;
    label: string;
    modelValue?: string | number;
    successMessage?: string;
    failedMessage?: string;
  }
  const props = defineProps<BaseInputProps>();

  const inputNameRef = toRef(props, 'name');
  const inputValueRef = toRef(props, 'modelValue');

  const {
    value: inputValue,
    errorMessage,
    handleBlur,
    handleChange,
    meta,
  } = useField(inputNameRef, undefined, {
    initialValue: inputValueRef,
  });

  const hasErrorMessage = computed(() => {
    return errorMessage || meta.valid;
  });
</script>

<template>
  <div class="my-2 flex flex-col">
    <label :for="name">{{ label }}</label>
    <input
      v-bind="$attrs"
      :id="name"
      :class="[
        'bg-primary-50 text-primary-900 pa-2 placeholder:(text-sm) rounded border outline-none',
        hasErrorMessage.value ? 'border-red-400' : 'border-primary-400',
      ]"
      :name="name"
      :value="inputValue"
      @input="handleChange"
      @blur="handleBlur"
    />
    <span
      v-if="hasErrorMessage"
      class="ml-2 text-sm text-red-400"
    >
      {{ meta.valid ? successMessage : errorMessage }}
    </span>
  </div>
</template>
