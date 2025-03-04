<template>
    <div v-for="personagem in personagens" :key="personagem.id">
        <h2>{{ personagem.name }}</h2>
        <img :src="personagem.image">
        <p>{{ personagem.status }}</p>
        <p>{{ personagem.species }}</p>
        <p>{{ personagem.type }}</p>
        <p>{{ personagem.gender }}</p>
        <p>{{ personagem.origin.name }}</p>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getCharacters } from "@/services/HttpService.js";

    const personagens = ref([]);

    async function getPersonagens() {
        const resultado = await getCharacters()

        console.log(resultado)

        personagens.value = resultado.results;
    }

    onMounted(getPersonagens);
</script>

<style scoped>

</style>


