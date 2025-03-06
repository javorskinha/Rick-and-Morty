<template>
    <div id="card">
        <div id="card-content">
            <img :src="src" :alt="alt">
            <div>
                <h2>{{ title }}</h2>
                <p :class="styleClass">{{ status }}</p>
                <p>{{ species }} / {{ gender }}</p>
                <p>{{ origin }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue';

const props = defineProps ({
    src: String,
    alt: String,
    title: String,
    status: String,
    species: String,
    gender: String,
    origin: String
})

const styleClass = ref ('')

watch (() => props.status, 
    (newStatus) => {
        if(newStatus === 'Alive'){
            styleClass.value = 'alive'
        } else if (newStatus === 'Dead'){
            styleClass.value = 'dead'
        } else {
            styleClass.value = 'unknown'
        }
    },
    {immediate: true}
)

</script>

<style scoped>
    #card{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1em auto;
        width: 100%;
    }

    #card-content {
        display: flex;
        align-items: center;
        background-color: var(--color-grey);
        width: 30em;
        height: 15em;
        justify-content: space-around;
        border: solid 1px var(--color-drak-grey);
        border-radius: 10px;
        box-shadow: 2px 2px 10px var(--color-black);
    }

    #card img{
        width: 13em;
        border-radius: 100px;
    }

    #card h2, p {
        font-family: var(--font-main);
        font-weight: 700;
        color: var(--color-light-green);
        padding: 5px;
    }

    #card h2{
        font-size: 2em;
    }

    #card p{
        font-size: 1em;
    }

    .dead {
        color: red;
    }

    .alive {
        color: var(--color-green);
    }

    .unknown {
        color: grey;
    }
</style>

