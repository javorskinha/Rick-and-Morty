<template>
    <div>
        <img :src="aCharacter.image"  alt="" data-id="props.id">
    </div>
</template>

<script setup>
import { getCharacter } from "@/services/HttpService.js";
import { ref, onMounted, defineProps } from 'vue';

const props = defineProps({ id: Number })
const aCharacter = ref({})

async function getACharacter(id) {
    const resultado = await getCharacter(id)

    console.log("erro ao pegar foto", resultado)

    aCharacter.value = resultado;
}
onMounted(() => {
    getACharacter(props.id);
});

</script>

<style scoped>
    div{
        display: flex;
        justify-content: center;
    }

    img{
        width: 50%;
        border-radius: 10px;
        border: solid 2px var(--color-dark-green);
    }
</style>