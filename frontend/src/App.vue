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
                    <svg width="220" height="48" viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M71.0078 17.2539C71.0078 24.0716 67.3438 30.625 60.0156 36.9141L67.5898 38.418C67.9727 39.1471 68.5104 40.2318 69.2031 41.6719C67.1615 41.526 64.2266 41.4531 60.3984 41.4531C56.7708 41.4531 52.9154 41.5078 48.832 41.6172C50.2721 39.4661 51.849 36.0026 53.5625 31.2266C55.4401 25.9766 56.3789 21.9479 56.3789 19.1406C56.3789 16.9531 55.7409 15.8594 54.4648 15.8594C52.3503 15.8594 49.9896 18.0286 47.3828 22.3672C45.1406 26.0677 43.3997 30.069 42.1602 34.3711C42.1602 39.1289 42.3971 42.1367 42.8711 43.3945C43.582 43.7044 44.931 44.2695 46.918 45.0898C46.7174 45.6003 46.3802 46.5117 45.9062 47.8242C39.6719 46.5117 34.2031 45.1901 29.5 43.8594C31.5234 39.3385 32.5352 33.6784 32.5352 26.8789C32.5352 19.569 31.2956 15.9141 28.8164 15.9141C27.1758 15.9141 25.599 17.3633 24.0859 20.2617C22.6276 23.069 21.6159 26.4505 21.0508 30.4062C21.0872 32.7031 21.944 37.2057 23.6211 43.9141C20.0299 42.3464 16.2565 41.5625 12.3008 41.5625C8.81901 41.5625 6.41276 42.1914 5.08203 43.4492L4.80859 36.9141C5.48307 36.5312 6.32161 36.3398 7.32422 36.3398C8.4362 36.3398 9.70312 36.6224 11.125 37.1875C9.95833 33.651 9.01042 29.2852 8.28125 24.0898C7.57031 19.1315 7.21484 14.5924 7.21484 10.4727V9.29688C7.21484 7.76562 6.60417 6.86328 5.38281 6.58984C4.16146 6.4987 2.9401 6.40755 1.71875 6.31641C1.04427 6.20703 0.707031 4.83073 0.707031 2.1875C0.707031 2.04167 0.898438 1.96875 1.28125 1.96875C3.35938 1.96875 10.4323 1.52214 22.5 0.628906C20.6771 5.82422 19.7656 11.3294 19.7656 17.1445C19.7656 18.293 19.8203 19.2591 19.9297 20.043C22.4453 11.056 27.2214 4.85807 34.2578 1.44922C35.8802 0.665365 37.2839 0.273438 38.4688 0.273438C42.3516 0.273438 44.293 4.13802 44.293 11.8672C44.293 14.638 44.0469 17.6641 43.5547 20.9453C44.6302 18.5208 46.6628 15.4401 49.6523 11.7031C53.043 7.49219 56.7617 5.38672 60.8086 5.38672C63.6888 5.38672 66.1042 6.48958 68.0547 8.69531C70.0234 10.9557 71.0078 13.8086 71.0078 17.2539ZM113.281 25.1016C113.281 26.0312 113.245 27.125 113.172 28.3828C113.172 28.6016 113.081 28.6836 112.898 28.6289C109.799 27.9362 104.723 27.0156 97.668 25.8672C91.3971 24.8646 88.1159 24.3633 87.8242 24.3633C87.4049 24.3633 87.1953 26.0768 87.1953 29.5039C87.1953 33.8242 88.1432 37.0508 90.0391 39.1836C91.4792 40.806 93.3294 41.6719 95.5898 41.7812C96.8659 41.8359 98.0417 41.6445 99.1172 41.207C99.5365 41.043 99.7461 40.8789 99.7461 40.7148C99.7461 40.6055 99.6367 40.5143 99.418 40.4414C97.0299 40.0039 95.0794 39.1198 93.5664 37.7891C92.0534 36.4401 91.2969 34.8359 91.2969 32.9766C91.2969 31.8099 91.9531 30.8711 93.2656 30.1602C94.5964 29.431 96.401 29.0664 98.6797 29.0664C100.247 29.0664 101.906 29.2305 103.656 29.5586C108.359 30.4701 110.711 32.3568 110.711 35.2188C110.711 36.0208 110.492 36.8411 110.055 37.6797C108.833 39.9766 107.32 41.6172 105.516 42.6016C102.891 44.0234 98.8984 44.7344 93.5391 44.7344C87.3776 44.7344 82.4557 42.4557 78.7734 37.8984C75.6198 34.0156 74.043 29.6315 74.043 24.7461C74.043 15.7227 81.4167 11.2109 96.1641 11.2109C104.714 11.2109 109.973 13.3529 111.941 17.6367C112.835 19.5872 113.281 22.0755 113.281 25.1016ZM102.809 18.8125C102.809 17.7917 102.143 16.9622 100.812 16.3242C99.4818 15.668 97.7227 15.3398 95.5352 15.3398C92.9831 15.3398 90.7682 15.5768 88.8906 16.0508C86.6849 16.5977 85.582 17.3359 85.582 18.2656C85.582 20.6172 89.3464 21.793 96.875 21.793C100.831 21.793 102.809 20.7995 102.809 18.8125ZM180.082 22.5586C180.082 27.8268 176.773 33.0404 170.156 38.1992L177.621 39.375C178.004 39.8854 178.523 40.6875 179.18 41.7812C177.758 41.7083 175.105 41.6719 171.223 41.6719C167.632 41.6719 163.73 41.7083 159.52 41.7812C160.85 40.2318 162.263 37.6797 163.758 34.125C165.38 30.2604 166.191 27.2253 166.191 25.0195C166.191 23.1602 165.553 22.2305 164.277 22.2305C162.199 22.2305 159.984 23.9805 157.633 27.4805C155.719 30.3242 154.169 33.5417 152.984 37.1328C152.984 40.7604 153.221 43.0391 153.695 43.9688C154.443 44.2604 155.682 44.5977 157.414 44.9805C157.214 45.3268 156.858 46.2201 156.348 47.6602L141.445 44.2422C143.195 40.8151 144.07 36.431 144.07 31.0898C144.07 28.6654 144.025 27.1341 143.934 26.4961C143.624 24.2904 142.867 23.1875 141.664 23.1875C141.208 23.1875 140.616 23.3698 139.887 23.7344C136.861 25.2474 134.655 28.7383 133.27 34.207C133.306 35.9388 134.145 39.2292 135.785 44.0781C131.848 42.2734 127.573 41.3711 122.961 41.3711C119.953 41.3711 117.884 41.8633 116.754 42.8477L116.863 36.5039C117.447 36.2852 118.158 36.1758 118.996 36.1758C120.382 36.1758 121.74 36.4766 123.07 37.0781C121.539 33.3958 120.163 27.0247 118.941 17.9648C118.759 16.7435 118.066 16.0234 116.863 15.8047C115.751 15.75 114.648 15.6862 113.555 15.6133C112.88 15.5221 112.543 14.4102 112.543 12.2773H113.117C115.195 12.2773 122.505 11.9401 135.047 11.2656C133.115 15.2031 132.148 19.6055 132.148 24.4727C132.148 25.5299 132.203 26.4232 132.312 27.1523C134.482 20.0065 138.629 14.5195 144.754 10.6914C146.358 9.6888 147.753 9.1875 148.938 9.1875C152.346 9.1875 154.051 12.9974 154.051 20.6172C154.051 22.8594 153.932 24.8737 153.695 26.6602C155.427 23.6888 157.35 21.1458 159.465 19.0312C163.129 15.4219 166.921 13.6172 170.84 13.6172C173.501 13.6172 175.707 14.4557 177.457 16.1328C179.207 17.7917 180.082 19.9336 180.082 22.5586ZM219.184 22.9141C219.184 24.6276 218.974 26.6966 218.555 29.1211C217.826 33.4232 216.221 37.0143 213.742 39.8945C210.534 43.6133 206.259 45.4727 200.918 45.4727C196.069 45.4727 191.685 43.9232 187.766 40.8242C183.628 37.543 181.559 33.6055 181.559 29.0117C181.559 25.4023 183.108 21.9753 186.207 18.7305C189.725 15.0482 194.301 12.8516 199.934 12.1406C201.738 11.9219 203.826 11.8125 206.195 11.8125C210.935 11.8125 214.335 12.7786 216.395 14.7109C218.254 16.4609 219.184 19.1953 219.184 22.9141ZM214.48 26.8789C214.48 25.4753 213.314 24.3724 210.98 23.5703C208.866 22.8594 206.15 22.5039 202.832 22.5039C199.186 22.5039 195.641 23.5065 192.195 25.5117C188.951 27.4076 187.328 29.2031 187.328 30.8984C187.328 32.0651 188.367 33.0404 190.445 33.8242C192.523 34.6081 195.048 35 198.02 35C201.775 35 205.457 34.1159 209.066 32.3477C212.676 30.5794 214.48 28.7565 214.48 26.8789Z" fill="black"/>
                    </svg>
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
