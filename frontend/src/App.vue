<script setup>
import { ref } from 'vue';

const data = ref('no data');

await fetch('https://django-api-eodw.onrender.com/api/items/?format=json')
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
    <div>
        green

        <p>purple</p>

        {{ data }}
    </div>
</template>

<style lang="scss">
@import url('@ui/styles');

div {
    color: palegreen;

    p {
        color: rebeccapurple;
    }
}
</style>
