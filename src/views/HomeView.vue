<template>
    <div id="home">
        <h1>Wubba Lubba Dub Dub!</h1>
        <VideoComponent src="https://www.youtube.com/embed/qRdzw2Osl8o?si=8wPkgabKQDaDK5df"/>
        <div class="container">
            <ShowCharacters />
        </div>
    </div>
</template>

<script setup>
import ShowCharacters from '@/components/ShowCharacters.vue';
import VideoComponent from '@/components/VideoComponent.vue';
</script>

<style scoped>
    #home{
        background-color: var(--color-light-green);
    }

    #home h1{
        color: var(--color-drak-grey);
        font-family: var(--font-main);
        font-weight: 900;
        font-size: 4em;
        text-align: center;
        padding: 1em;
        text-shadow: 3px 3px 10px var(--color-black);
    }

    .container{
        width: 80%;
        margin: auto;
    }

</style>

