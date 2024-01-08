import { getUId, useAppFetch } from '@shared/lib';
import type { Difficulty, Player, Quantity } from '@shared/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePlayersStore = defineStore('players', () => {
    const leaderboardPlayers = ref<Player[]>([]);
    const currentPlayers = ref<Player[]>([]);
    const turnIndex = ref(0);

    function createPlayer(playerName: string) {
        currentPlayers.value.push({ id: getUId(), name: playerName, score: 0 });
    }

    function togglePlayersTurn() {
        if (currentPlayers.value.length === 1) return;

        if (currentPlayers.value.length < turnIndex.value + 1) turnIndex.value += 1;
        else if (currentPlayers.value.length === turnIndex.value + 1) turnIndex.value = 0;
        else console.error('turn index exceeded an amount of currentPlayers');
    }

    function addScoreToCurrentPlayer(difficulty: Difficulty, quantity: Quantity) {
        let score = 60;

        switch (difficulty) {
            case 'easy':
                score += quantity * 2 + 10;
                break;

            case 'medium':
                score += quantity * 2 + 20;
                break;

            case 'hard':
                score += quantity * 2 + 30;
                break;
        }
        currentPlayers.value[turnIndex.value].score += Math.round(score);
    }

    async function fetchPlayers() {
        /* await useAppFetch('/players/?format=json')
            .get()
            .json()
            .then(({ data }) => {
                leaderboardPlayers.value = data.value;
            }); */
    }

    function $reset() {
        currentPlayers.value = [];
        turnIndex.value = 0;
    }

    return {
        leaderboardPlayers,
        currentPlayers,
        turnIndex,
        createPlayer,
        togglePlayersTurn,
        addScoreToCurrentPlayer,
        fetchPlayers,
        $reset
    };
});
