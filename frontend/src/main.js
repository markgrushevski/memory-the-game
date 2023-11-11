import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import 'normalize.css';

createApp(App).use(createPinia()).mount('#app');

/** @typedef {{ id: number, name: string }} Player */
/** @typedef {{ id: number, url: string }} Card */
/** @typedef {{ id: number, size: string, difficulty: string }} Field */
/** @typedef {{ id: number, value: string }} Difficulty */
