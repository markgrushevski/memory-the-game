import 'normalize.css';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(createPinia()).mount('#app');

/** @typedef {{ id: number, background_color: string, url: string, cardId: number }} Card */
/** @typedef {{ id: number, name: string, score: number }} Player */

/** @typedef { 16 | 24 | 40 } Quantity */
/** @typedef { 'easy' | 'medium' | 'hard' } Difficulty */

/** @typedef {{ name: string, score: number }} CurrentPlayer */
/** @typedef {{ match: boolean, player: Player, openedCards: Card[] }} Step */
/** @typedef {{ steps: Step[] }} History */

/** @typedef {{ difficulty: Difficulty, history: History, players: Player[] }} Game */
