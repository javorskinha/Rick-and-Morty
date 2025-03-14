<template>
    <div>
        <div class="cards">
            <div v-for="people in personagens" :key="people.id">
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
        <div id="button">
            <ButtonComponent @click="prevPage && getPersonagens(prevPage)" name="PREVOUS"/>
            <ButtonComponent @click="nextPage && getPersonagens(nextPage)" name="NEXT"/>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, } from "vue";
import { getCharacters } from "@/services/HttpService.js";
import CardComponent from "./CardComponent.vue";
import ButtonComponent from "./ButtonComponent.vue"
import { useFavoritesStore } from '@/stores/FavoritesStore'

    const personagens = ref([]);
    const nextPage = ref('');
    const prevPage = ref('');
    const favoritesStore = useFavoritesStore();

    async function getPersonagens(url) {
        const resultado = await getCharacters(url)

        console.log(resultado)

        personagens.value = resultado.results;
        nextPage.value = resultado.info.next;
        prevPage.value = resultado.info.prev;
    }

    onMounted(getPersonagens);

    const isFavorite = (people)=>{
        return favoritesStore.favorites.some(fav => fav.id === people.id);
    }

    function turnFavorite(people) {
        favoritesStore.turnFav(people);
    };
</script>

<style>
    .cards{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        gap: 1em;
    }

    .card{
        position: relative;
    }

    .favorite-marker{
        position: absolute;
        top: 0;
        right: 0;
        width: 3.5em;
        height: 3.5em;
        z-index: 1;
        background-repeat: no-repeat;
    }

    .favorite-true {
        background-image: url(../../public/images/favorite-true.png);
    }

    .favorite-false {
        background-image: url(../../public/images/favorite-false.png);
    }
</style>
