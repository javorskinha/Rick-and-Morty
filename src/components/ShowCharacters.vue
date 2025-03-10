<template>
    <div>
        <div class="cards">
            <div v-for="people in personagens" :key="people.id">
                <CardComponent :src="people.image" :title="people.name" :status="people.status" :species="people.species" :gender="people.gender" :origin="people.origin.name" />
            </div>
        </div>
        <div id="button">
            <ButtonComponent @click="prevPage && getPersonagens(prevPage)" name="PREVOUS"/>
            <ButtonComponent @click="nextPage && getPersonagens(nextPage)" name="NEXT"/>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getCharacters } from "@/services/HttpService.js";
import CardComponent from "./CardComponent.vue";
import ButtonComponent from "./ButtonComponent.vue"

    const personagens = ref([]);
    const nextPage = ref('');
    const prevPage = ref('');

    async function getPersonagens(url) {
        const resultado = await getCharacters(url)

        console.log(resultado)

        personagens.value = resultado.results;
        nextPage.value = resultado.info.next;
        prevPage.value = resultado.info.prev;
    }

    onMounted(getPersonagens);
</script>

<style scoped>
    .cards{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        gap: 1em;
    }
</style>
