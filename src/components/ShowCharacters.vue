<template>
    <div>
        <div v-for="people in personagens" :key="people.id">
            <CardComponent :src="people.image" :title="people.name" :status="people.status" :species="people.species" :gender="people.gender" :origin="people.origin.name" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getCharacters } from "@/services/HttpService.js";
import CardComponent from "./CardComponent.vue";

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


