<template>
    <div class="father">
        <div>
            <h1>List of characters</h1>
            <p>He you can see all the characters that appear in the Rick and Morty tv series so far, this list contains image, name, status (alive or not), species, gender and origin of each one in alphabetical order.</p>
        </div>
        <div>
            <div class="container">
                <ShowCharacters />
            </div>
        </div>
    </div>
</template>

<script setup>
import ShowCharacters from '@/components/ShowCharacters.vue';
</script>

<style scoped>
    .container{
        width: 100%;
        margin: auto;
    }
</style>


