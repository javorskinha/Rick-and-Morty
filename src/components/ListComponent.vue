<template>
    <div>
        <ul>
            <li class="name">{{ nameName }}</li>
            <li>{{ name }}</li>
            <li class="name">{{ dataOneData }}</li>
            <li>{{ dataOne }}</li>
            <li class="name">{{ dataTwoData }}</li>
            <li>{{ dataTwo }}</li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    nameName: String,
    name: String,
    dataOneData: String,
    dataOne: String,
    dataTwoData: String,
    dataTwo: String
})
</script>

<style scoped>
    ul {
        width: 100%;
        margin: 1em auto;
        font-weight: 700;
        font-size: 1.2em;
    }

    li{
        color: var(--color-dark-green);
        text-shadow: 2px 2px 10px var(--color-black);
    }

    .name {
        color: var(--color-dark-grey);
    }
</style>