<template>
    <div id="card">
        <div id="card-content">
            <img :src="src" :alt="alt">
            <div>
                <h2>{{ title }}</h2>
                <p>{{ status }}</p>
                <p>{{ species }}</p>
                <p>{{ gender }}</p>
                <p>{{ origin }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps ({
    src: String,
    alt: String,
    title: String,
    status: String,
    species: String,
    gender: String,
    origin: String
})
</script>

<style scoped>
    #card{
        display: grid;
        width: 20%;
    }

    #card-content {
        display: flex;
        align-items: center;
        background-color: var(--color-grey);
        width: 28em;
        height: 15em;
        justify-content: space-around;
        border: solid 1px var(--color-drak-grey);
        border-radius: 10px;
        box-shadow: 2em;
    }

    #card img{
        width: 13em;
        border-radius: 100px;
    }

    #card h2, p {
        font-family: var(--font-main);
        font-weight: 700;
        color: var(--color-light-green);
    }

    #card h2{
        font-size: 2em;
    }
</style>

