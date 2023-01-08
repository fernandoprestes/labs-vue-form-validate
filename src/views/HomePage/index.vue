<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import FormAddress from './components/FormAddress.vue';
  import FormCredential from './components/FormCredential.vue';
  import FormPersonal from './components/FormPersonal.vue';

  const currentTab = ref('FormPersonal');

  const formTabsInstance: any = {
    FormPersonal,
    FormAddress,
    FormCredential,
  };

  const formTabs: any = reactive({
    FormPersonal: { label: '1' },
    FormAddress: { label: '2' },
    FormCredential: { label: '3' },
  });

  const handleChangeTab = (value: string) => {
    currentTab.value = value;
  };
</script>

<template>
  <main class="container mx-auto flex h-screen w-full justify-center">
    <div class="mx-auto mt-10 w-[900px]">
      <div class="flex justify-around">
        <button
          v-for="(_, tab) in formTabs"
          :key="tab"
          class="border-primary-500 flex h-16 w-16 items-center justify-center rounded-full border"
          :class="[
            currentTab === tab.toString() ? 'bg-primary-500 text-primary-100' : 'bg-primary-100 text-primary-500',
          ]"
          @click="handleChangeTab(tab.toString())"
        >
          <span class="text-2xl font-bold">{{ formTabs[tab].label }}</span>
        </button>
      </div>
      <div class="mt-10 px-6">
        <component :is="formTabsInstance[currentTab]" />
      </div>
    </div>
  </main>
</template>
