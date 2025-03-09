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
        max-width: 60%;
        height: auto;
    }
</style>