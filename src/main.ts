import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@unocss/reset/tailwind.css';
import 'uno.css';

import { vMaska } from 'maska';

const app = createApp(App);

app.directive('maska', vMaska);

app.use(router);

app.mount('#app');
