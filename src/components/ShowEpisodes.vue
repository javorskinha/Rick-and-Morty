<template>
    <div>
        <div class="list">
            <div v-for="episode in episodes" :key="episode.id">
                <ListComponent nameName="Name:" :name="episode.name" dataOneData="Air Data:" :data-one="episode.air_date" dataTwoData="Episode:" :data-two="episode.episode"/>
            </div>
        </div>
        <div id="button">
            <ButtonComponent @click="prevPage && getEpisode(prevPage) && num--" name="PREVOUS"/>
            <p>{{ num }} of 3</p>
            <ButtonComponent @click="nextPage && getEpisode(nextPage) && num++" name="NEXT"/>
        </div>
    </div>
</template>

<script setup>
import ListComponent from '@/components/ListComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { getEpisodes } from '@/services/HttpService';
import { ref, onMounted } from 'vue';

    const episodes = ref([])
    const nextPage = ref('');
    const prevPage = ref('');
    const num = ref(1)

    async function getEpisode(url) {
        const resultado = await getEpisodes(url)

        episodes.value = resultado.results;
        nextPage.value = resultado.info.next;
        prevPage.value = resultado.info.prev;
    }

    onMounted(getEpisode);
</script>

<style>
    .list {
        background-image: url(../../public/images/episode.jpg);
        background-position: 70%;
    }
</style>