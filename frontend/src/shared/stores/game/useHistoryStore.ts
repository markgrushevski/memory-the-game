import type { Card, Player, History } from '@shared/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useHistoryStore = defineStore('history', () => {
    const history = ref<History>({ steps: [] });

    function makeHistoryStep(isMatch: boolean, player: Player, selectedCardsPerTurn: Card[]) {
        history.value.steps.push({ isMatch, player, selectedCardsPerTurn });
    }

    function $reset() {
        history.value = { steps: [] };
    }

    return { history, makeHistoryStep, $reset };
});
