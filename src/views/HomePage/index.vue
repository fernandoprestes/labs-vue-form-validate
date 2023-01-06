<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import FormAddress from './components/FormAddress.vue';
  import FormCredential from './components/FormCredential.vue';
  import FormPersonal from './components/FormPersonal.vue';

  const currentTab = ref('FormAddress');

  const formTabsInstance: any = {
    FormAddress,
    FormCredential,
    FormPersonal,
  };

  const formTabs: any = reactive({
    FormAddress: { label: '1' },
    FormCredential: { label: '2' },
    FormPersonal: { label: '3' },
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
      <component :is="formTabsInstance[currentTab]" />
    </div>
  </main>
</template>
