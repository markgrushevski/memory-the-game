import 'normalize.css';
import { router, pinia } from '@app';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(router).use(pinia).mount('#app');
