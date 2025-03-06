<template>
    <div>
        <div v-for="people in personagens" :key="people.id">
            <CardComponent :src="people.image" :title="people.name" :status="people.status" :species="people.species" :gender="people.gender" :origin="people.origin.name" />
        </div>
        <div class="button">
            <ButtonComponent @click="prevPage && getPersonagens(prevPage)" name="PREVOUS"/>
            <ButtonComponent @click="nextPage && getPersonagens(nextPage)" name="NEXT"/>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, defineProps } from "vue";
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
    .button{
        display: flex;
        justify-content: center;
    }
</style>


@click="prevPage && getPersonagens(prevPage)"