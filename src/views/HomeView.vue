<template>
    <div id="home">
        <BannerComponent src="../../public/images/rick-and-morty-home.jpg" alt="rick and morty image"/>
        <ShowCharacters />
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
</style>

