import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useHistoryStore = defineStore('history', () => {
    const history = ref(/** @type {import('@/main').History} */ ({ steps: [] }));

    function makeHistoryStep(isMatch, player, openedCards) {
        history.value.steps.push({ match: isMatch, player, openedCards });
    }

    function $reset() {
        history.value = { steps: [] };
    }

    return { history, makeHistoryStep, $reset };
});
