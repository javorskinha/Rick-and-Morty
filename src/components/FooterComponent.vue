<template>
    <div id="footer">
        <div class="footer-images-repeat">
            <div v-for="n in 2" :key="n" class="footer-images">
                <div v-for="pic in photos" :key="pic.id" class="images">
                    <img :src="pic.src" :alt="pic.alt">
                </div>
            </div>
        </div>
        <p class="footer-p">Rick and Morty co.</p>
        <hr>
        <div class="footer-streaming">
            <a href="https://www.max.com/br/pt/shows/rick-morty/ab553cdc-e15d-4597-b65f-bec9201fd2dd?utm_source=universal_search" target="_blank" rel="external"><img src="../../public/images/hbo-max.png" alt="HBO max icon"></a>
            <a href="https://www.primevideo.com/-/pt/detail/Rick-Morty/0QG2DSIPHWFT11LTO37WHI8W9V" target="_blank" rel="external"><img src="../../public/images/prime-video.png" alt="Prime video icon"></a>
        </div>
        <div class="footer-section">
            <img src="../../public/images/cartoon-network.png" alt="">
            <a href="https://www.cartoonnetwork.co.uk/" target="_blank" rel="external">Cartoon Network</a>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const photos = ref([
        {id:'01', src:'../../public/images/morty-smith.png', alt:'morty picture'},
        {id:'02', src:'../../public/images/summer-smith.png', alt:'summer picture'},
        {id:'03', src:'../../public/images/jerry-smith.png', alt:'jerry picture'},
        {id:'04', src:'../../public/images/beth-smith.png', alt:'beth picture'},
        {id:'05', src:'../../public/images/prumo.png', alt:'prumo picture'},
        {id:'06', src:'../../public/images/rick-sanchez.png', alt:'rick picture'}
    ]);

</script>

<style scoped>
    #footer{
        display: flex;
        flex-direction: column;
        background-color: var(--color-drak-grey);
        align-items: center;
        border: solid 3px var(--color-black);
    }

    .footer-images-repeat, .footer-images{
        display: flex;
        padding: 5px;
    }

    .images img {
        margin-right: 1em;
    }

    .footer-p, .footer-section a{
        font-family: var(--font-main);
        font-weight: 700;
        padding: 1em;;
    }

    .footer-p{
        font-size: 1.2em;
    }

    .footer-section{
        display: flex;
        margin-bottom: 25px;
    }

    .footer-section a{
        text-decoration: none;
        color: var(--color-light-grey);
        font-size: 1.5em;
    }

    hr{
        border: none;
        height: 2px;
        width: 50%;
        background-color: var(--color-medium-grey);
    }
    
</style>
