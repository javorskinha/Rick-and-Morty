<template>
    <div>
        <div class="footer-images-repeat">
            <div v-for="n in 3" :key="n" class="footer-images">
                <div v-for="pic in photos" :key="pic.id" class="images">
                    <img :src="pic.src" :alt="pic.alt">
                </div>
            </div>
        </div>
        <p>Rick and Morty co.</p>
        <hr class="horizontal-line">
        <img src="" alt="">
        <p>Cartoon Network</p>
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
    .footer-images-repeat{
        display: flex;
    }

    .footer-images{
        display: flex;
    }

    .horizontal-line{
        color: var();
    }
</style>
