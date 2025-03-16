<template>
    <div>
        <div class="cards">
            <div v-for="person in allCharacters" :key="person.id">
                <div class="card">
                    <div @click="turnFavorite(person)" class="favorite-marker" :class="isFavorite(person) ? 'favorite-true' : 'favorite-false '"></div>
                    <CardComponent 
                    :src="person.image" 
                    :title="person.name" 
                    :status="person.status" 
                    :species="person.species" 
                    :gender="person.gender" 
                    :origin="person.origin.name" />
                </div>
            </div>
        </div>
        <div id="button">
            <ButtonComponent @click="prevPage && gatAllCharacters(prevPage) & num --" name="PREVOUS"/>
            <p>{{ num }} of 42</p>
            <ButtonComponent @click="nextPage && gatAllCharacters(nextPage) && num++" name="NEXT"/>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, } from "vue";
import { getCharacters } from "@/services/HttpService.js";
import CardComponent from "./CardComponent.vue";
import ButtonComponent from "./ButtonComponent.vue"
import { useFavoritesStore } from '@/stores/FavoritesStore'

    const allCharacters = ref([]);
    const nextPage = ref('');
    const prevPage = ref('');
    const favoritesStore = useFavoritesStore();
    const num = ref(1)

    async function getAllCharacters(url) {
        const resultado = await getCharacters(url)

        console.log(resultado)

        allCharacters.value = resultado.results;
        nextPage.value = resultado.info.next;
        prevPage.value = resultado.info.prev;
    }

    onMounted(getAllCharacters);

    const isFavorite = (person)=>{
        return favoritesStore.favorites.some(fav => fav.id === person.id);
    }

    function turnFavorite(person) {
        favoritesStore.turnFav(person);
    };
</script>
