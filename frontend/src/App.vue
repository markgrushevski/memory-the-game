<script setup>
import { useFetch } from '@vueuse/core';
import { ref } from 'vue';

const _data = ref('no data');

useFetch('https://django-api-eodw.onrender.com/api/items/?format=json')
    .get()
    .json()
    .then(({ data }) => {
        _data.value = data.value;
    });
</script>

<template>
    <div class="container">
        <h1>Hello world</h1>

        <section class="field">
            <div class="field-wrapper">
                <div class="field-container field-container-4">
                    <div class="field-container__card field-container__card-type-1">
                        <span>
                            #1
                        </span>
                    </div>
                    <div class="field-container__card field-container__card-type-2">
                        <span>
                            #2
                        </span>
                    </div>
                    <div class="field-container__card field-container__card-type-3">
                        <span>
                            #3
                        </span>
                    </div>
                    <div class="field-container__card field-container__card-type-4">
                        <span>
                            #4
                        </span>
                    </div>
                    <div class="field-container__card field-container__card-type-5">
                        <span>
                            #5
                        </span>
                    </div>
                    <div class="field-container__card field-container__card-type-6">
                        <span>
                            #6
                        </span>
                    </div>
                    <div class="field-container__card field-container__card-type-7">
                        <span>
                            #7
                        </span>
                    </div>
                    <div class="field-container__card field-container__card-type-8">
                        <span>
                            #8
                        </span>
                    </div>
                    <div class="field-container__card field-container__card-type-1">
                        <span>
                            #1
                        </span>
                    </div>
                    <div class="field-container__card field-container__card-type-2">
                        <span>
                            #2
                        </span>
                    </div>
                    <div class="field-container__card field-container__card-type-3">
                        <span>
                            #3
                        </span>
                    </div>
                    <div class="field-container__card field-container__card-type-4">
                        <span>
                            #4
                        </span>
                    </div>
                    <div class="field-container__card field-container__card-type-5">
                        <span>
                            #5
                        </span>
                    </div>
                    <div class="field-container__card field-container__card-type-6">
                        <span>
                            #6
                        </span>
                    </div>
                    <div class="field-container__card field-container__card-type-7">
                        <span>
                            #7
                        </span>
                    </div>
                    <div class="field-container__card field-container__card-type-8">
                        <span>
                            #8
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <p>
            In a land far, far away, where pixels danced and code waltzed, Byte 27 emerged as a beacon of digital
            creativity. The binary winds whispered secrets of innovation, and the circuitry hummed with the melody of
            progress. In this enchanted realm, ones and zeros pirouetted in a dazzling display, weaving tales of bytes
            and dreams. Lorem Ipsum bowed to the Byte 27 symphony, for in this kingdom of creation, the code became
            poetry, and innovation, an eternal dance.
        </p>

        <pre>
            {{ _data }}
        </pre>
    </div>
</template>

<style lang="scss">
@import url('./ui/styles.scss');
</style>
