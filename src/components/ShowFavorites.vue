<template>
    <div>{{ favorites }}</div>
</template>

<script setup>
import { useFavoritesStore } from '@/stores/FavoritesStore'

const favorites = useFavoritesStore();
</script>