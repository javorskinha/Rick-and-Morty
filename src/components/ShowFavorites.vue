<template>
    <div>
        <p v-if="favoritesStore.favorites.length === 0">There's nothing here yet :/</p>
        <div v-else class="cards">
            <div v-for="people in favoritesStore.favorites" :key="people.id">
                <div class="card">
                    <div @click="turnFavorite(people)" class="favorite-marker" :class="isFavorite(people) ? 'favorite-true' : 'favorite-false '"></div>
                    <CardComponent
                    :src="people.image"
                    :title="people.name"
                    :status="people.status"
                    :species="people.species"
                    :gender="people.gender"
                    :origin="people.origin.name" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useFavoritesStore } from '@/stores/FavoritesStore';
import CardComponent from './CardComponent.vue';

const favoritesStore = useFavoritesStore();

const isFavorite = (people) => {
    return favoritesStore.favorites.some(fav => fav.id === people.id);
};

function turnFavorite(people) {
    favoritesStore.turnFav(people);
};
</script>

<style scoped>
    p{
        text-align: center;
    }
</style>