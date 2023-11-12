import { useAppFetch } from '@lib';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCardsStore = defineStore('cards', () => {
    const cards = ref(/** @type {import('@/main').Card[]} */ ([]));

    const cardsQuantity = ref(/** @type {import('@/main').Quantity} */ (16));

    function fetchCards() {
        useAppFetch(`/shuffledCards/${cardsQuantity.value}/?format=json`)
            .get()
            .json()
            .then(({ data }) => {
                const _cards = [];

                for (let i = 0; i < data.value.length; i++) {
                    _cards.push({ ...data.value[i], cardId: i });
                }

                cards.value = _cards;
            });
    }

    function $reset() {
        cardsQuantity.value = 16;
    }

    return { cards, cardsQuantity, fetchCards, $reset };
});
