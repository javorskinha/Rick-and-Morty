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
}, {persist:true})

/*import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
    state: () => ({
        favorites: []
    }),
    actions: {
        turnFav(character) {
            const index = this.favorites.findIndex(fav => fav.id === character.id);
            if (index !== -1) {
                this.favorites.splice(index, 1); // Remove se já estiver nos favoritos
            } else {
                this.favorites.push(character); // Adiciona o objeto inteiro
            }
        }
    }
});