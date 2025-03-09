<template>
    <div class="father">
        <div id="home">
            <div>
                <img src="../../public/images/rick-and-morty-cartoon.png" alt="">
                <img src="../../public/images/season7-banner.jpg" alt="">
            </div>
            <div>
                <h1>Synopsis</h1>
                <p>The series follows the misadventures of alcoholic scientist Rick and his overly nervous grandson Morty, who split their time between domestic family life and intergalactic travel. Often finding themselves in a heap of trouble that more often than not created through their own actions, these two will get themselves out of trouble in the most entertaining way! This extremely clever show will blow your mind as well as all other parallel realities of your mind!</p>
                <p>Rick Sanchez, a depressed, alcoholic, abusive, madman (who also happens to be a genius scientist with the ability to travel through dimensions) returns to his daughter Beth's life after two decades of being silent between the two. He finds her married to an incompetent, pathetic man named Jerry, and the couple has two teenage kids. Summer, the oldest girl, is a rebellious teen looking to have more friends at school, and Morty, the youngest child and a boy, is an anxious, quiet, and sweet kid. Rick makes Morty his sidekick and takes him on hilarious Interdimensional adventures, causing poor Morty to become steadily more miserable due to Rick's insane, abusive, and careless additude.</p>
            </div>
        </div>
        <div>
            <VideoComponent src="https://www.youtube.com/embed/qRdzw2Osl8o?si=8wPkgabKQDaDK5df"/>
        </div>
    </div>
</template>

<script setup>
import VideoComponent from '@/components/VideoComponent.vue';
</script>

<style scoped>
    #home {
        display: grid;
        grid-template-columns: 40% 60%;
        place-items: center;
    }

    img{
        width: 20em;
        height: auto;
        margin: 20px;
        padding: 2px;
        border: solid 2px var(--color-black);
    }

    p {
        display: grid;
        place-self: center;
        width: 75%;
    }
</style>

