<template>
    <button>{{ name }}</button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    name: String
})
</script>

<style scoped>
    button{
        width: 15%;
        height: 35px;
        margin: 40px;
        font-family: var(--font-main);
        font-weight: 700;
        font-size: 90%;
        border: none;
        border-radius: 8px;
        color: var(--color-black);
        background: linear-gradient(to right, var(--color-medium-green), var(--color-green));
        transition: background 0.5s ease, transform 0.5s ease;
    }

    button:hover {
        background: var(--color-green);
        transform: scale(1.1);
    }
</style>




