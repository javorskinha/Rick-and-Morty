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

    function turnFav(card) {
        const index = favorites.value.findIndex((i) => i.id === card.id)
        if (index === -1){
            favorites.value = [...favorites.value, card];
        } else {
            favorites.value.splice(index, 1);
        }
    };

    watch (favorites, (newValue) => {
        localStorage.setItem('favorites', JSON.stringify(newValue));
    }, {deep: true});

    return { favorites, turnFav};
}, {persist:true})
