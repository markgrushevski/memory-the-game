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
