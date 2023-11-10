<script setup>
import { ref } from 'vue';

const data = ref('no data');

fetch('https://django-api-eodw.onrender.com/api/items/?format=json')
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        data.value = res;
    })
    .catch((e) => {
        console.error(e);
    });
</script>

<template>
    <div class="container">
        <h1>Hello world</h1>

        <p>In a land far, far away, where pixels danced and code waltzed, Byte 27 emerged as a beacon of digital creativity. The binary winds whispered secrets of innovation, and the circuitry hummed with the melody of progress. In this enchanted realm, ones and zeros pirouetted in a dazzling display, weaving tales of bytes and dreams. Lorem Ipsum bowed to the Byte 27 symphony, for in this kingdom of creation, the code became poetry, and innovation, an eternal dance.</p>

        <pre>
            {{ data }}
        </pre>
        
    </div>
</template>

<style lang="scss">
    @import url('./ui/normolize.css');
    @import url('./ui/styles.scss');
</style>
