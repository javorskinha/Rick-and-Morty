<template>
    <div class="father">
        <div class="intro">
            <section>
                    <img src="../../public/images/show-me-what-you-got.png" alt="">
            </section>
            <section>
                <h1>List of episodes</h1>
                <p>The following is a list of episodes from the Adult Swim series, Rick and Morty including its spin-offs such as Rick and Morty: The Anime and Vindicators 2 in sequential order with their broadcast dates and production codes. The series first premiered on Adult Swim on December 2, 2013 and has continued to release episodes ever since. The series is also available to watch on DVD and Blu-Ray, the streaming service Max and Adult Swim's website.
                As of December 17th 2023, 71 episodes of Rick and Morty have aired. In May 2018, it was announced that the series was renewed for 70 more episodes, which renewed the series to a tenth season. On October 17, 2024, it was announced that the series was renewed for a eleventh and twelfth season.</p>
            </section>
        </div>
        <div>
            <div v-for="episode in episodes" :key="episode.id">
                <ListComponent :name="episode.name" :data-one="episode.air_date" :data-two="episode.episode"/> 
            </div>
            <div id="button">
                <ButtonComponent @click="prevPage && getEpisode(prevPage)" name="PREVOUS"/>
                <ButtonComponent @click="nextPage && getEpisode(nextPage)" name="NEXT"/>
            </div>
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

    async function getEpisode(url) {
        const resultado = await getEpisodes(url)

        episodes.value = resultado.results;
        nextPage.value = resultado.info.next;
        prevPage.value = resultado.info.prev;
    }

    onMounted(getEpisode);
</script>

<style scoped>
    img{
        width: 100%;
        border-radius: 15px;
        padding: 2px;
        border: solid 2px var(--color-black);
    }
</style>


