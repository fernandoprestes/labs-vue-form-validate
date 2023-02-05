import { mount } from '@vue/test-utils';

import BaseInputVue from './BaseInput.vue';

describe('Component BaseInput', () => {
  const wrapper = mount(BaseInputVue, {
    props: {
      name: 'fullName',
      label: 'Nome completo*',
    },
  });

  test('should component exist', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
