<template>
    <button>{{ name }}</button>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    name: String
})
</script>

<style scoped>
    button{
        width: 30%;
        margin: 10px 10px 10px 20px;
        font-family: var(--font-main);
        font-weight: 700;
        font-size: 90%;
        border: solid 3px var(--color-black);
        border-radius: 5px;
        color: var(--color-light-green);
        background-color: var(--color-drak-grey);
    }

    button:hover {
        border-color: var(--color-light-green);
        background-color: var(--color-green);
        color: var(--color-black);
    }
</style>




