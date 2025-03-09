<template>
    <div class="father">
        <div class="intro">
            <section>
                <h1>Loren</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur laborum incidunt dignissimos laboriosam nobis, consectetur temporibus corporis accusantium iure provident! Quaerat inventore blanditiis a nam, voluptatem sequi adipisci minus.</p>
            </section>
            <section><img src="../../public/images/location-img.jpg" alt=""></section>
        </div>
        <div>
            <div v-for="local in locations" :key="local.id">
                <ListComponent :name="local.name" :data-one="local.type" :data-two="local.dimension"/> 
            </div>
            <div id="button">
                <ButtonComponent @click="prevPage && getLocals(prevPage)" name="PREVOUS"/>
                <ButtonComponent @click="nextPage && getLocals(nextPage)" name="NEXT"/>
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
    }

    img {
        width: 30%;
        height: auto;
    }
</style>


