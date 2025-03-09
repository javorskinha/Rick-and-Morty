<template>
    <ul>
        <li>{{ name }}</li>
        <li>{{ dataOne }}</li>
        <li>{{ dataTwo }}</li>
    </ul>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    name: String,
    dataOne: String,
    dataTwo: String
})
</script>

<style scoped>

</style>