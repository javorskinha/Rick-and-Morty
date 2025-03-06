<template>
    <div id="home">
        <BannerComponent src="../../public/images/rick-and-morty-home.jpg" alt="rick and morty image"/>
        <h1>Wubba Lubba Dub Dub!</h1>
        <div class="container">
            <ShowCharacters class="cards"/>
        </div>
    </div>
</template>

<script setup>
import BannerComponent from '@/components/BannerComponent.vue';
import ShowCharacters from '@/components/ShowCharacters.vue';

</script>

<style scoped>
    #home{
        background-color: var(--color-medium-grey);
    }

    #home h1{
        color: var(--color-light-green);
        font-family: var(--font-main);
        font-weight: 900;
        font-size: 4em;
        text-align: center;
        margin: 1.2em;
        text-shadow: 3px 3px 10px var(--color-black);
    }

    .container{
        width: 80%;
        margin: auto;
    }

    .cards{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        gap: 1em;
    }
</style>

