<template>
    <div class="father">
        <h1>Your favorites section is here</h1>
        <div class="cards">
            <ShowFavorites />
        </div>
    </div>
</template>

<script setup>
import ShowFavorites from '@/components/ShowFavorites.vue';
</script>

<style scoped>
    .father {
        min-height: 70vh;
    }
</style>






