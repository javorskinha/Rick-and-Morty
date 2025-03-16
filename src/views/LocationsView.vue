<template>
    <div class="father">
        <div class="intro">
            <section>
                <h1>List of Locations</h1>
                <p>We already know that the series takes place in a multitude of places, dimensions and planets, here we have a list of the locations already known in the series.<span>(until now)</span></p>
            </section>
        </div>
        <div>
            <div class="list">
                <div v-for="local in locations" :key="local.id">
                    <ListComponent nameName="Name:" :name="local.name" dataOneData="Type:" :data-one="local.type" dataTwoData="Dimension" :data-two="local.dimension"/>
                </div>
            </div>
            <div id="button">
                <ButtonComponent @click="prevPage && getLocals(prevPage) && num--" name="PREVOUS"/>
                <p>{{ num }} of 7</p>
                <ButtonComponent @click="nextPage && getLocals(nextPage) && num++" name="NEXT"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import ListComponent from '@/components/ListComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { getLocations } from '@/services/HttpService';
import { ref, onMounted } from 'vue';

    const locations = ref([])
    const nextPage = ref('');
    const prevPage = ref('');
    const num = ref(1);

    async function getLocals(url) {
        const resultado = await getLocations(url)

        locations.value = resultado.results;
        nextPage.value = resultado.info.next;
        prevPage.value = resultado.info.prev;
    }

    onMounted(getLocals);
</script>

<style scoped>
    .intro{
        display: flex;
        justify-content: center;
    }

    img {
        width: 30%;
        height: auto;
    }

    .list {
        background-image: url(../../public/images/place.jpg);
    }

    span{
        font-size: 0.7em;
    }
</style>


