import { useAppFetch } from '@shared/lib';
import type { Card, Quantity } from '@shared/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCardsStore = defineStore('cards', () => {
    const cards = ref<Card[]>([]);

    const cardsQuantity = ref<Quantity>(16);

    async function fetchCards() {
        await useAppFetch(`/shuffledCards/${cardsQuantity.value}/?format=json`)
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
        cards.value = [];
        cardsQuantity.value = 16;
    }

    return { cards, cardsQuantity, fetchCards, $reset };
});
