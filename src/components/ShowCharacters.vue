<template>
    <div v-for="personagem in personagens" :key="personagem.id">
        <h2>{{ personagem.name }}</h2>
        <img :src="personagem.image">
    </div>
    <p>este é um personagem</p>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getCharacters } from "@/services/HttpService.js";

    const personagens = ref([]);

    async function getPersonagens() {
        const resultado = await getCharacters()

        personagens.value = resultado.results;
    }

    onMounted(getPersonagens);
</script>




