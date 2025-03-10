<template>
    <div class="father">
        <div class="content">
            <h1>Rick and Morty the Tv Show</h1>
            <p>Rick and Morty is an American adult animated television series created by Justin Roiland and Dan Harmon that premiered on December 2, 2013 on Cartoon Network's Adult Swim programming block and is produced by Williams Street. The series focuses on the adventures of cynical and nihilistic mad scientist Rick Sanchez and his fretful and kind-hearted grandson Morty Smith, who spend their time between domestic life and sci-fi adventures within various planets, dimensions, and universes using Rick's spaceship and portal gun. In the United States, the series is rated TV-14, although there are episodes rated TV-MA.</p>
            <div class="grid">
                <img src="../../public/images/poster-img.jpg" alt="" class="banner">
                <p>The show's first season consists of 11 twenty-two minute episodes. After airing the first six episodes, Adult Swim renewed the show for a second season, consisting of 10 twenty-two minute episodes. In 2015, the show was renewed for a third season, consisting of 10 twenty-two minute episodes that aired in the summer of 2017. During the fall of 2019, Rick and Morty returned with a fourth season airing ten episodes with the first half of the season being aired in 2019 and the second half after new years.[1] The series aired its fifth season within the summer of 2021 and its sixth season in the winter of 2022. As of the winter of 2023, the series has finished airing its seventh season.[2] The eigth season of the series is slated to premiere in 2025.</p>
            </div>
            <div class="grid">
                <div>
                    <p>In May 2018, Adult Swim announced that the series was renewed for seventy additional episodes, which renewed the series to a tenth season. On October 17, 2024, Adult Swim announced that the series was renewed for a eleventh and twelfth season as the series will run through 2029.</p>
                    <p>On January 24, 2023, Adult Swim severed its ties with Roiland and fired him from the series amid charges of domestic abuse. The series is planned to continue without his involvement and his roles were recast with Ian Cardoni and Harry Belden as Rick and Morty starting with its seventh season.</p>
                    <p>The show was originally based on a series of crudely animated short films for Channel 101 based on a Back to the Future parody The Real Animated Adventures of Doc and Mharti created by Justin Roiland.</p>
                    <p>The series has spawned a franchise and multiple spin-offs such as the web-series Vindicators 2 and anime series Rick and Morty: The Anime which aired in 2022 and 2024 respectively along with various comic book series, shorts, video games, merchandise, and media.</p>
                </div>
                <div class="img">
                    <img src="../../public/images/christmas-rick.jpg" alt="">
                    <img src="../../public/images/fight-morty.jpg" alt="">
                    <img src="../../public/images/jesus-rick.jpg" alt="">
                </div>
            </div>
            <div>
                <VideoComponent src="https://www.youtube.com/embed/qRdzw2Osl8o?si=8wPkgabKQDaDK5df"/>
            </div>
            <div class="grid">
                <div class="img">
                    <img src="../../public/images/season7-banner.jpg" alt="">
                </div>
                <div>
                    <h1>Synopsis</h1>
                    <p>The series follows the misadventures of alcoholic scientist Rick and his overly nervous grandson Morty, who split their time between domestic family life and intergalactic travel. Often finding themselves in a heap of trouble that more often than not created through their own actions, these two will get themselves out of trouble in the most entertaining way! This extremely clever show will blow your mind as well as all other parallel realities of your mind!</p>
                    <p>Rick Sanchez, a depressed, alcoholic, abusive, madman (who also happens to be a genius scientist with the ability to travel through dimensions) returns to his daughter Beth's life after two decades of being silent between the two. He finds her married to an incompetent, pathetic man named Jerry, and the couple has two teenage kids. Summer, the oldest girl, is a rebellious teen looking to have more friends at school, and Morty, the youngest child and a boy, is an anxious, quiet, and sweet kid. Rick makes Morty his sidekick and takes him on hilarious Interdimensional adventures, causing poor Morty to become steadily more miserable due to Rick's insane, abusive, and careless additude.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import VideoComponent from '@/components/VideoComponent.vue';
</script>

<style scoped>
    .content {
        width: 90%;
        margin: auto;
    }

    img{
        width: 100%;
        height: auto;
        margin: 20px;
        padding: 2px;
        border: solid 2px var(--color-black);
    }

    .img{
        width: 60%;
        margin: auto;
    }

    .banner {
        border: none;
    }

    .grid{
        display: grid;
        grid-template-columns: 55% 45%;
        align-items: center;
        gap: 20px;
    }

    p {
        display: grid;
        place-self: center;
        width:100%;
    }
</style>

