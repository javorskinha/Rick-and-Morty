<template>
    <div id="video">
        <iframe width="610" height="365" :src="src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</template>

<script setup >
import { defineProps } from 'vue';

const props = defineProps({
    src: String,
})
</script>

<style>
    #video{
        display: flex;
        justify-content: center;
    }
</style>

