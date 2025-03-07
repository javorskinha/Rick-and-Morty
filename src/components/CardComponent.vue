<template>
    <div id="card">
        <div id="card-content">
            <img :src="src" :alt="alt">
            <div class="card-text">
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
        background-image: url('../../public/images/portal.png');
        background-position: 0;
        background-repeat: no-repeat;
        background-color: var(--color-drak-grey);
        width: 30em;
        height: 15em;
        justify-content: space-around;
        border: solid 1px var(--color-drak-grey);
        border-radius: 10px;
        box-shadow: 2px 2px 10px var(--color-black);
        position: relative;
    }

    #card img{
        width: 10em;
        border-radius: 100px;
        position: absolute;
        left: 50px
    }

    .card-text {
        font-family: var(--font-main);
        font-weight: 700;
        color: var(--color-light-green);
        padding: 5px;
        position: absolute;
        left: 55%;
        margin: 15px;
    }

    #card h2{
        font-size: 2em;
        margin: 8px 0 8px 0;
    }

    #card p{
        font-size: 1em;
        margin: 8px 0 8px 0;
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

