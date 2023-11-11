<script setup>
import { useAppFetch } from '@lib';
import { ref } from 'vue';

const cards = ref(/** @type {import('@/types').Card[]} */ ([]));

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
    }); 
     
useFetch('https://django-api-eodw.onrender.com/api/items/2')
    .delete()
    .json()
    .then(({ data }) => {
        console.log(data.value);
    }); */
</script>

<template>
    <div class="container">
        <section class="memo">
            <div class="memo-header">
                <div class="logo">
                    <img src="./ui/img/logo.svg" alt="Memo" />
                </div>
                <div class="memo-header__buttons">
                    <button class="button-icon button-help" aria-label="Правила игры" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                    </button>
                    <button class="button-icon button-restart" aria-label="Начать новую игру" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"/></svg>
                    </button>
                </div>
            </div>
            <div class="memo-content">
                <div class="memo-score">
                    <div class="memo-score__moves">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/></svg>
                        <span>7</span>
                    </div>
                    <div class="memo-score__players">
                        <div id="memo-player-1" class="memo-score__players-player">
                            <div class="memo-score__players-player-name">
                                Игрок 1
                            </div>
                        </div>
                        <div id="memo-player-2" class="memo-score__players-player is-active">
                            <div class="memo-score__players-player-name">
                                Игрок 2
                            </div>
                        </div>
                        <div id="memo-player-2" class="memo-score__players-player">
                            <div class="memo-score__players-player-name">
                                Игрок 3
                            </div>
                        </div>
                    </div>
                    <div class="memo-score__time">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                        <span>2:32</span>
                    </div>
                </div>
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


                            <div class="memo-board__card memo-board__card-type-9">
                                <span> #9 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-10">
                                <span> #10 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-11">
                                <span> #11 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-12">
                                <span> #12 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-13">
                                <span> #13 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-14">
                                <span> #14 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-15">
                                <span> #15 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-16">
                                <span> #16 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-17">
                                <span> #17 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-18">
                                <span> #18 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-19">
                                <span> #19 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-20">
                                <span> #20 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-21">
                                <span> #21 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-22">
                                <span> #22 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-23">
                                <span> #23 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-24">
                                <span> #24 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-25">
                                <span> #25 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-26">
                                <span> #26 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-27">
                                <span> #27 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-28">
                                <span> #28 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-29">
                                <span> #29 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-30">
                                <span> #30 </span>
                            </div>

                            <div class="memo-board__card memo-board__card-type-9">
                                <span> #9 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-10">
                                <span> #10 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-11">
                                <span> #11 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-12">
                                <span> #12 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-13">
                                <span> #13 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-14">
                                <span> #14 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-15">
                                <span> #15 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-16">
                                <span> #16 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-17">
                                <span> #17 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-18">
                                <span> #18 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-19">
                                <span> #19 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-20">
                                <span> #20 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-21">
                                <span> #21 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-22">
                                <span> #22 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-23">
                                <span> #23 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-24">
                                <span> #24 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-25">
                                <span> #25 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-26">
                                <span> #26 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-27">
                                <span> #27 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-28">
                                <span> #28 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-29">
                                <span> #29 </span>
                            </div>
                            <div class="memo-board__card memo-board__card-type-30">
                                <span> #30 </span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>

        <!-- -->
        <section class="memo" style="position: absolute; top: 75%; opacity: 0.75">
            <h1 class="logo">Тестирую отрисовку карточек</h1>
            <div class="memo-content">
                <main>
                    <div class="memo-board">
                        <div class="memo-board-inner">
                            <!-- is-active is-match is-not-match -->
                            <div
                                v-for="card in cards"
                                :key="card.id"
                                class="memo-board__card"
                                @click="
                                    (ev) => {
                                        ev.target.classList.add('is-active');
                                    }
                                "
                            >
                                <span>{{ card.id }}</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
@import url('./ui/styles.scss');
</style>
