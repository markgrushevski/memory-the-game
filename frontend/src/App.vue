<script setup>
import { useAppFetch } from '@lib';
import { ref } from 'vue';

const cards = ref([]);

const quantity = ref(/** @type {16 | 24 | 36} */ (16));

useAppFetch(`/shuffledCards/${quantity.value}/?format=json`)
    .get()
    .json()
    .then(({ data }) => {
        cards.value = data.value;
    });

/* useFetch('https://django-api-eodw.onrender.com/api/items/3/')
    .put(JSON.stringify({ name: 'PUT', description: 'меняю третий' }), 'application/json')
    .json()
    .then(({ data }) => {
        console.log(data.value);
    }); */

/* useFetch('https://django-api-eodw.onrender.com/api/items/2')
    .delete()
    .json()
    .then(({ data }) => {
        console.log(data.value);
    }); */
</script>

<template>
    <div class="container">
        <section class="memo">
            <div class="memo-heading">
                <div class="logo">
                    <img src="./ui/img/logo.svg" alt="Memo" />
                </div>
            </div>
            <div class="memo-content">
                <main>
                    <div class="memo-board">
                        <div class="memo-board-inner">
                            <div class="memo-board__card memo-board__card-type-1">
                                <span> #1 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-2 is-active is-match">
                                <span> #2 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-3">
                                <span> #3 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-4 is-open">
                                <span> #4 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-5 is-active is-not-match">
                                <span> #5 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-6">
                                <span> #6 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-7 is-active">
                                <span> #7 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-8">
                                <span> #8 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-1">
                                <span> #1 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-2 is-active is-match">
                                <span> #2 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-3 is-active is-not-match">
                                <span> #3 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-4 is-open">
                                <span> #4 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-5">
                                <span> #5 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-6">
                                <span> #6 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-7">
                                <span> #7 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-8">
                                <span> #8 </span>
                            </div>
                        </div>
                    </div>
                </main>
                <aside class="memo-aside">
                    <div class="memo-players">
                        <div id="memo-player-1" class="memo-players__player">
                            <div class="memo-players__player-name">Игрок 1</div>
                            <div class="memo-players__player-score">Открыто карточек: 2</div>
                        </div>
                        <div id="memo-player-2" class="memo-players__player is-active">
                            <div class="memo-players__player-name">Игрок 2</div>
                            <div class="memo-players__player-score">Открыто карточек: 1</div>
                        </div>
                        <div id="memo-player-2" class="memo-players__player">
                            <div class="memo-players__player-name">Игрок 3</div>
                            <div class="memo-players__player-score">Открыто карточек: 4</div>
                        </div>
                    </div>

                    <div class="memo-controls">
                        <button class="memo-button button-help" aria-label="Правила игры" type="submit">
                            Правила игры
                        </button>
                        <!--
                        <button class="memo-button button-restart" aria-label="Начать новую игру" type="submit">
                            Начать новую игру
                        </button>
                        -->
                    </div>
                </aside>
            </div>
        </section>

        <!--
        <pre>
            {{ cards }}
        </pre>
        -->
    </div>
</template>

<style lang="scss">
@import url('./ui/styles.scss');
</style>
