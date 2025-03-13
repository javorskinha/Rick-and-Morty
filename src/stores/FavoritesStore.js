import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useFavoritesStore = defineStore('favorites', ()=> {
    function loadFavorites (){
        try{
            return JSON.parse(localStorage.getItem('favorites')) || [];
        } catch (error) {
            console.error('Error getting favorites', error);
            throw error;
        }
    }

    const favorites = ref(loadFavorites());

    function turnFav(item) {
        if (favorites.value.includes(item)){
            favorites.value = favorites.value.filter((fav) => fav !== item);
        } else {
            favorites.value.push(item);
        }
    };

    watch (favorites, (newValue) => {
        localStorage.setItem('favorites', JSON.stringify(newValue));
    }, {deep: true});

    return { favorites, turnFav};
})