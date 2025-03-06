<template>
    <div id="home">
        <BannerComponent src="../../public/images/rick-and-morty-home.jpg" alt="rick and morty image"/>
        <div class="container">
            <ShowCharacters class="cards"/>
        </div>
        <div>
            <button>Prev</button>
            <p>{{ page }} of 42</p>
            <button @click="nextPage">Next</button>
        </div>
    </div>
</template>

<script setup>
import BannerComponent from '@/components/BannerComponent.vue';
import ShowCharacters from '@/components/ShowCharacters.vue';
import { ref, onMounted } from 'vue';
import { changePage } from '@/services/HttpService';

    const page = ref();

    async function nextPage() {
        const resultado = await changePage()

        console.log(resultado)

        page.value = resultado.results;
    }

    onMounted(changePage);

</script>

<style scoped>
    #home{
        background-color: var(--color-medium-grey);
    }

    .container{
        width: 80%;
        margin: auto;
    }

    .cards{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        gap: 1em;
    }
</style>

