<template>
    <div id="header">
      <nav>
          <RouterLink to="/" class="nav  home">Home</RouterLink>
          <RouterLink to="/about" class="nav">About</RouterLink>
          <a href="" class="nav">Characters</a>
          <RouterLink to="/locations" class="nav">Locations</RouterLink>
          <a href="" class="nav">Episodes</a>
      </nav>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
  #header {
    height: 35em;
    background-color: var(--color-drak-grey);
    background-image: url('../../public/images/rick-and-morty-home.jpg');
    background-position: 0;
    background-size: cover;
    position: relative;
  }

  nav {
    position: absolute;
    bottom: 15px;
  }

  .nav {
    color: var(--color-light-green);
    text-decoration: none;
    font-family: var(--font-main);
    font-weight: 700;
    font-size: 1.5rem;
    padding: 0 1em 0 1em;
  }

  .nav:hover {
    color: var(--color-green);
    text-decoration: underline;
  }

</style>

