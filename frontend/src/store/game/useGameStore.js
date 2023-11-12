import { useCardsStore, useHistoryStore, usePlayersStore } from '@store';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGameStore = defineStore('game', () => {
    const historyStore = useHistoryStore();
    const playersStore = usePlayersStore();
    const cardsStore = useCardsStore();

    const game = ref(/** @type {import('@/main').Game} */ (null));
    const gameTime = ref(0);
    const intervalId = ref(null);

    const selectedDifficulty = ref(/** @type {import('@/main').Difficulty} */ ('easy'));

    /**
     * @param {string[]} playerNameList
     * @param {import('@/main').Difficulty} difficulty
     * @param {import('@/main').Quantity} quantity
     *  */
    function initGame(playerNameList, difficulty, quantity) {
        $reset();

        for (const playerName of playerNameList) {
            playersStore.createPlayer(playerName);
        }

        selectedDifficulty.value = difficulty;
        cardsStore.cardsQuantity = quantity;

        gameTime.value = 1200000;

        cardsStore.fetchCards();
        playersStore.fetchPlayers();

        intervalId.value = setInterval(() => {
            gameTime.value = gameTime.value - 1;
        }, 1000);
    }

    function createGame() {
        game.value = {
            difficulty: selectedDifficulty.value,
            history: historyStore.history,
            players: playersStore.players
        };

        console.dir(game.value);
    }

    function $reset() {
        game.value = null;
        gameTime.value = 0;
        clearInterval(intervalId.value);
        selectedDifficulty.value = 'easy';

        historyStore.$reset();
        playersStore.$reset();
        cardsStore.$reset();
    }

    return { game, initGame, createGame, gameTime, $reset };
});
