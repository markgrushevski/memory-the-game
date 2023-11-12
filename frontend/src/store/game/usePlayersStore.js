import { useAppFetch } from '@lib';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePlayersStore = defineStore('players', () => {
    const players = ref(/** @type {import('@/main').Player[]} */ ([]));
    const currentPlayers = ref(/** @type {import('@/main').CurrentPlayer[]} */ ([]));
    const turnIndex = ref(0);

    function createPlayer(playerName) {
        currentPlayers.value.push({ name: playerName, score: 0 });
    }

    function togglePlayersTurn() {
        if (currentPlayers.value.length !== 1) {
            if (currentPlayers.value.length - 1 < turnIndex.value) {
                turnIndex.value += 1;
            } else if (currentPlayers.value.length - 1 === turnIndex.value) {
                turnIndex.value = 0;
            } else {
                console.error('turn index reach out of the current players length');
            }
        }
    }

    /**
     * @param {boolean} isMatch
     * @param {import('@/main').Difficulty} difficulty
     * */
    function addScoreToCurrentPlayer(isMatch, difficulty) {
        if (!isMatch) return;

        currentPlayers[turnIndex].value.score += 250;

        switch (difficulty) {
            case 'easy':
                currentPlayers[turnIndex].value.score *= 1;
                return;

            case 'medium':
                currentPlayers[turnIndex].value.score *= 1.15;
                return;

            case 'hard':
                currentPlayers[turnIndex].value.score *= 1.3;
                return;
        }

        currentPlayers[turnIndex].value.score = Math.round(currentPlayers[turnIndex].value.score);
    }

    function fetchPlayers() {
        useAppFetch('/players/?format=json')
            .get()
            .json()
            .then(({ data }) => {
                players.value = data.value;
            });
    }

    return {
        players,
        currentPlayers,
        turnIndex,
        createPlayer,
        togglePlayersTurn,
        addScoreToCurrentPlayer,
        fetchPlayers
    };
});
