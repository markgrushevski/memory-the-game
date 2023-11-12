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
                        <path d="M71.0078 17.2539C71.0078 24.0716 67.3438 30.625 60.0156 36.9141L67.5898 38.418C67.9727 39.1471 68.5104 40.2318 69.2031 41.6719C67.1615 41.526 64.2266 41.4531 60.3984 41.4531C56.7708 41.4531 52.9154 41.5078 48.832 41.6172C50.2721 39.4661 51.849 36.0026 53.5625 31.2266C55.4401 25.9766 56.3789 21.9479 56.3789 19.1406C56.3789 16.9531 55.7409 15.8594 54.4648 15.8594C52.3503 15.8594 49.9896 18.0286 47.3828 22.3672C45.1406 26.0677 43.3997 30.069 42.1602 34.3711C42.1602 39.1289 42.3971 42.1367 42.8711 43.3945C43.582 43.7044 44.931 44.2695 46.918 45.0898C46.7174 45.6003 46.3802 46.5117 45.9062 47.8242C39.6719 46.5117 34.2031 45.1901 29.5 43.8594C31.5234 39.3385 32.5352 33.6784 32.5352 26.8789C32.5352 19.569 31.2956 15.9141 28.8164 15.9141C27.1758 15.9141 25.599 17.3633 24.0859 20.2617C22.6276 23.069 21.6159 26.4505 21.0508 30.4062C21.0872 32.7031 21.944 37.2057 23.6211 43.9141C20.0299 42.3464 16.2565 41.5625 12.3008 41.5625C8.81901 41.5625 6.41276 42.1914 5.08203 43.4492L4.80859 36.9141C5.48307 36.5312 6.32161 36.3398 7.32422 36.3398C8.4362 36.3398 9.70312 36.6224 11.125 37.1875C9.95833 33.651 9.01042 29.2852 8.28125 24.0898C7.57031 19.1315 7.21484 14.5924 7.21484 10.4727V9.29688C7.21484 7.76562 6.60417 6.86328 5.38281 6.58984C4.16146 6.4987 2.9401 6.40755 1.71875 6.31641C1.04427 6.20703 0.707031 4.83073 0.707031 2.1875C0.707031 2.04167 0.898438 1.96875 1.28125 1.96875C3.35938 1.96875 10.4323 1.52214 22.5 0.628906C20.6771 5.82422 19.7656 11.3294 19.7656 17.1445C19.7656 18.293 19.8203 19.2591 19.9297 20.043C22.4453 11.056 27.2214 4.85807 34.2578 1.44922C35.8802 0.665365 37.2839 0.273438 38.4688 0.273438C42.3516 0.273438 44.293 4.13802 44.293 11.8672C44.293 14.638 44.0469 17.6641 43.5547 20.9453C44.6302 18.5208 46.6628 15.4401 49.6523 11.7031C53.043 7.49219 56.7617 5.38672 60.8086 5.38672C63.6888 5.38672 66.1042 6.48958 68.0547 8.69531C70.0234 10.9557 71.0078 13.8086 71.0078 17.2539ZM113.281 25.1016C113.281 26.0312 113.245 27.125 113.172 28.3828C113.172 28.6016 113.081 28.6836 112.898 28.6289C109.799 27.9362 104.723 27.0156 97.668 25.8672C91.3971 24.8646 88.1159 24.3633 87.8242 24.3633C87.4049 24.3633 87.1953 26.0768 87.1953 29.5039C87.1953 33.8242 88.1432 37.0508 90.0391 39.1836C91.4792 40.806 93.3294 41.6719 95.5898 41.7812C96.8659 41.8359 98.0417 41.6445 99.1172 41.207C99.5365 41.043 99.7461 40.8789 99.7461 40.7148C99.7461 40.6055 99.6367 40.5143 99.418 40.4414C97.0299 40.0039 95.0794 39.1198 93.5664 37.7891C92.0534 36.4401 91.2969 34.8359 91.2969 32.9766C91.2969 31.8099 91.9531 30.8711 93.2656 30.1602C94.5964 29.431 96.401 29.0664 98.6797 29.0664C100.247 29.0664 101.906 29.2305 103.656 29.5586C108.359 30.4701 110.711 32.3568 110.711 35.2188C110.711 36.0208 110.492 36.8411 110.055 37.6797C108.833 39.9766 107.32 41.6172 105.516 42.6016C102.891 44.0234 98.8984 44.7344 93.5391 44.7344C87.3776 44.7344 82.4557 42.4557 78.7734 37.8984C75.6198 34.0156 74.043 29.6315 74.043 24.7461C74.043 15.7227 81.4167 11.2109 96.1641 11.2109C104.714 11.2109 109.973 13.3529 111.941 17.6367C112.835 19.5872 113.281 22.0755 113.281 25.1016ZM102.809 18.8125C102.809 17.7917 102.143 16.9622 100.812 16.3242C99.4818 15.668 97.7227 15.3398 95.5352 15.3398C92.9831 15.3398 90.7682 15.5768 88.8906 16.0508C86.6849 16.5977 85.582 17.3359 85.582 18.2656C85.582 20.6172 89.3464 21.793 96.875 21.793C100.831 21.793 102.809 20.7995 102.809 18.8125ZM180.082 22.5586C180.082 27.8268 176.773 33.0404 170.156 38.1992L177.621 39.375C178.004 39.8854 178.523 40.6875 179.18 41.7812C177.758 41.7083 175.105 41.6719 171.223 41.6719C167.632 41.6719 163.73 41.7083 159.52 41.7812C160.85 40.2318 162.263 37.6797 163.758 34.125C165.38 30.2604 166.191 27.2253 166.191 25.0195C166.191 23.1602 165.553 22.2305 164.277 22.2305C162.199 22.2305 159.984 23.9805 157.633 27.4805C155.719 30.3242 154.169 33.5417 152.984 37.1328C152.984 40.7604 153.221 43.0391 153.695 43.9688C154.443 44.2604 155.682 44.5977 157.414 44.9805C157.214 45.3268 156.858 46.2201 156.348 47.6602L141.445 44.2422C143.195 40.8151 144.07 36.431 144.07 31.0898C144.07 28.6654 144.025 27.1341 143.934 26.4961C143.624 24.2904 142.867 23.1875 141.664 23.1875C141.208 23.1875 140.616 23.3698 139.887 23.7344C136.861 25.2474 134.655 28.7383 133.27 34.207C133.306 35.9388 134.145 39.2292 135.785 44.0781C131.848 42.2734 127.573 41.3711 122.961 41.3711C119.953 41.3711 117.884 41.8633 116.754 42.8477L116.863 36.5039C117.447 36.2852 118.158 36.1758 118.996 36.1758C120.382 36.1758 121.74 36.4766 123.07 37.0781C121.539 33.3958 120.163 27.0247 118.941 17.9648C118.759 16.7435 118.066 16.0234 116.863 15.8047C115.751 15.75 114.648 15.6862 113.555 15.6133C112.88 15.5221 112.543 14.4102 112.543 12.2773H113.117C115.195 12.2773 122.505 11.9401 135.047 11.2656C133.115 15.2031 132.148 19.6055 132.148 24.4727C132.148 25.5299 132.203 26.4232 132.312 27.1523C134.482 20.0065 138.629 14.5195 144.754 10.6914C146.358 9.6888 147.753 9.1875 148.938 9.1875C152.346 9.1875 154.051 12.9974 154.051 20.6172C154.051 22.8594 153.932 24.8737 153.695 26.6602C155.427 23.6888 157.35 21.1458 159.465 19.0312C163.129 15.4219 166.921 13.6172 170.84 13.6172C173.501 13.6172 175.707 14.4557 177.457 16.1328C179.207 17.7917 180.082 19.9336 180.082 22.5586ZM219.184 22.9141C219.184 24.6276 218.974 26.6966 218.555 29.1211C217.826 33.4232 216.221 37.0143 213.742 39.8945C210.534 43.6133 206.259 45.4727 200.918 45.4727C196.069 45.4727 191.685 43.9232 187.766 40.8242C183.628 37.543 181.559 33.6055 181.559 29.0117C181.559 25.4023 183.108 21.9753 186.207 18.7305C189.725 15.0482 194.301 12.8516 199.934 12.1406C201.738 11.9219 203.826 11.8125 206.195 11.8125C210.935 11.8125 214.335 12.7786 216.395 14.7109C218.254 16.4609 219.184 19.1953 219.184 22.9141ZM214.48 26.8789C214.48 25.4753 213.314 24.3724 210.98 23.5703C208.866 22.8594 206.15 22.5039 202.832 22.5039C199.186 22.5039 195.641 23.5065 192.195 25.5117C188.951 27.4076 187.328 29.2031 187.328 30.8984C187.328 32.0651 188.367 33.0404 190.445 33.8242C192.523 34.6081 195.048 35 198.02 35C201.775 35 205.457 34.1159 209.066 32.3477C212.676 30.5794 214.48 28.7565 214.48 26.8789Z" />
                    </svg>
                </div>
                <div class="memo-header__buttons">
                    <button class="button-icon button-help" type="submit" aria-label="Правила игры" title="Правила игры">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/>
                            <path d="M12.717,5.063A4,4,0,0,0,8,9a1,1,0,0,0,2,0,2,2,0,0,1,2.371-1.967,2.024,2.024,0,0,1,1.6,1.595,2,2,0,0,1-1,2.125A3.954,3.954,0,0,0,11,14.257V15a1,1,0,0,0,2,0v-.743a1.982,1.982,0,0,1,.93-1.752,4,4,0,0,0-1.213-7.442Z"/>
                            <rect x="11" y="17" width="2" height="2" rx="1"/>
                        </svg>
                    </button>
                    <button class="button-icon button-restart" type="submit" aria-label="Начать новую игру" title="Начать новую игру">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M21.962,12.875A10.03,10.03,0,1,1,19.122,5H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.985,11.985,0,1,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1h0A.982.982,0,0,0,21.962,12.875Z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="memo-content">
                <div class="memo-score">
                    <div class="memo-score__moves">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="16" height="16">
                            <path d="m16.395,10.122l-5.192-2.843c-.673-.379-1.473-.372-2.138.017-.667.39-1.064,1.083-1.064,1.855v5.699c0,.772.397,1.465,1.064,1.855.34.199.714.297,1.087.297.358,0,.716-.091,1.041-.274l5.212-2.854c.687-.386,1.096-1.086,1.096-1.873s-.409-1.487-1.105-1.878Zm-.961,2.003l-5.212,2.855c-.019.01-.077.042-.147-.001-.074-.043-.074-.107-.074-.128v-5.699c0-.021,0-.085.074-.128.027-.016.052-.021.074-.021.036,0,.065.016.083.026l5.192,2.844c.019.011.076.043.076.13s-.058.119-.066.125ZM12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Z"/>
                        </svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="16" height="16">
                            <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/>
                            <path d="M12,6a1,1,0,0,0-1,1v4.325L7.629,13.437a1,1,0,0,0,1.062,1.7l3.84-2.4A1,1,0,0,0,13,11.879V7A1,1,0,0,0,12,6Z"/>
                        </svg>
                        <span>2:32</span>
                    </div>
                </div>
                <main>
                    <div class="memo-board">
                        <div class="memo-board-inner">
                            <div class="memo-board__card memo-board__card-type-1">
                                <img src="src/ui/img/goggles.svg" alt="Мемо карточка">
                            </div>
                            <div class="memo-board__card memo-board__card-type-2 is-active is-match">
                                <img src="src/ui/img/popsicle.svg" alt="Мемо карточка">
                            </div>
                            <div class="memo-board__card memo-board__card-type-3">
                                <img src="src/ui/img/ice-cream-cone.svg" alt="Мемо карточка">
                            </div>
                            <div class="memo-board__card memo-board__card-type-4 is-open">
                                <img src="src/ui/img/banana.svg" alt="Мемо карточка">
                            </div>
                            <div class="memo-board__card memo-board__card-type-5 is-active is-not-match">
                                <img src="src/ui/img/beach-ball.svg" alt="Мемо карточка">
                            </div>
                            <div class="memo-board__card memo-board__card-type-6">
                                <img src="src/ui/img/camera.svg" alt="Мемо карточка">
                            </div>
                            <div class="memo-board__card memo-board__card-type-7 is-active">
                                <img src="src/ui/img/sun.svg" alt="Мемо карточка">
                            </div>
                            <div class="memo-board__card memo-board__card-type-8">
                                <img src="src/ui/img/slippers.svg" alt="Мемо карточка">
                            </div>
                            <div class="memo-board__card memo-board__card-type-1">
                                <img src="src/ui/img/goggles.svg" alt="Мемо карточка">
                            </div>
                            <div class="memo-board__card memo-board__card-type-2 is-active is-match">
                                <img src="src/ui/img/popsicle.svg" alt="Мемо карточка">
                            </div>
                            <div class="memo-board__card memo-board__card-type-3 is-active is-not-match">
                                <img src="src/ui/img/ice-cream-cone.svg" alt="Мемо карточка">
                            </div>
                            <div class="memo-board__card memo-board__card-type-4 is-open">
                                <img src="src/ui/img/banana.svg" alt="Мемо карточка">
                            </div>
                            <div class="memo-board__card memo-board__card-type-5">
                                <img src="src/ui/img/beach-ball.svg" alt="Мемо карточка">
                            </div>
                            <div class="memo-board__card memo-board__card-type-6">
                                <img src="src/ui/img/camera.svg" alt="Мемо карточка">
                            </div>
                            <div class="memo-board__card memo-board__card-type-7">
                                <img src="src/ui/img/sun.svg" alt="Мемо карточка">
                            </div>
                            <div class="memo-board__card memo-board__card-type-8">
                                <img src="src/ui/img/slippers.svg" alt="Мемо карточка">
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
