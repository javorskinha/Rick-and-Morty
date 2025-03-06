<template>
    <img :src="picture" :alt="description">
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps ({
    picture: String,
    description: String
})
</script>

<style scoped>
    img{
        max-width: 100%;
        height: auto;
        border-bottom: solid 3px var(--color-black); 
        box-shadow: 0.1px 20px 20px var(--color-black);
    }
</style>