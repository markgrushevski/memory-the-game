import { useAppFetch } from '@shared/lib';
import { useCardsStore, useHistoryStore, usePlayersStore } from '@shared/stores';
import type { Difficulty, Game, Quantity } from '@shared/types';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useGameStore = defineStore('game', () => {
    const historyStore = useHistoryStore();
    const playersStore = usePlayersStore();
    const cardsStore = useCardsStore();

    const game = ref<Game | null>(null);
    const gameTimeInMS = ref(300_000);
    const intervalId = ref(0);
    const selectedDifficulty = ref<Difficulty>('easy');

    const isTimeOut = computed({
        get() {
            return gameTimeInMS.value <= 0;
        },
        set(value) {
            if (value) gameTimeInMS.value = 0;
            else gameTimeInMS.value = 300_000;
        }
    });

    async function initGame(playerNameList: string[], difficulty: Difficulty, quantity: Quantity) {
        console.log('initGame\n', playerNameList, difficulty, quantity);
        $reset();

        playerNameList.forEach((playerName) => {
            playersStore.createPlayer(playerName);
        });
        selectedDifficulty.value = difficulty;
        cardsStore.cardsQuantity = quantity;

        isTimeOut.value = false;

        // сделать loading и onerror
        await cardsStore.fetchCards();
        await playersStore.fetchPlayers();

        intervalId.value = setInterval(() => {
            if (isTimeOut.value) createGame();
            else gameTimeInMS.value -= 1000;
        }, 1000);
    }

    async function createGame() {
        clearInterval(intervalId.value);

        game.value = {
            difficulty: selectedDifficulty.value,
            history: historyStore.history,
            players: playersStore.currentPlayers,
            field: cardsStore.cards
        };

        console.log('createGame\n', game.value);

        await useAppFetch('/games/?format=json')
            .post(JSON.stringify(game.value), 'application/json')
            .json()
            .then(({ data }) => {
                console.log('/api/games/', data.value);
            });

        for await (const player of playersStore.currentPlayers) {
            await useAppFetch('/players/?format=json')
                .post(JSON.stringify(player), 'application/json')
                .json()
                .then(({ data }) => {
                    console.log('/api/players/', data.value);
                });
        }
    }

    function $reset() {
        clearInterval(intervalId.value);
        game.value = null;
        isTimeOut.value = false;
        selectedDifficulty.value = 'easy';

        historyStore.$reset();
        playersStore.$reset();
        cardsStore.$reset();
    }

    return { game, gameTimeInMS, selectedDifficulty, isTimeOut, initGame, createGame, $reset };
});
