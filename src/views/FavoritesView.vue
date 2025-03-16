<template>
    <div class="father">
        <h1>Your favorites section</h1>
        <div class="card">
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






