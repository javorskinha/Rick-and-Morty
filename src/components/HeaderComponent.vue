<template>
    <div id="header">
      <section class="img">
        <img src="../../public/images/rick-and-morty-icon.png" alt="">
        <img src="../../public/images/rick-and-morty.png" alt="">
      </section>
      <section class="navbar">
        <nav>
            <RouterLink to="/" class="nav  home">Home</RouterLink>
            <RouterLink to="/about" class="nav">About</RouterLink>
        </nav>
      </section>
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
  #header {
    background-color: var(--color-drak-grey);
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .img{
    margin: 1.5em;
    justify-content: space-between;
  }

  .nav {
    color: #fff;
    text-decoration: none;
    font-family: var(--font-header);
    font-size: 1.5rem;
    padding: 0 1em 0 1em;
  }

  .home{
    border-right: solid 2px var(--color-grey);
  }
</style>

