<template>
    <div id="header">
        <nav>
            <RouterLink to="/" class="nav  home">Home</RouterLink>
            <RouterLink to="/characters" class="nav">Characters</RouterLink>
            <RouterLink to="/locations" class="nav">Locations</RouterLink>
            <RouterLink to="/episodes" class="nav">Episodes</RouterLink>
        </nav>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
  #header {
    height: 40em;
    background: 
    linear-gradient(to top, rgba(3, 3, 3, 0.945), rgba(255, 255, 255, 0) 60%),
      url('../../public/images/rick-and-morty-home.jpg');
    background-position: 0;
    background-size: cover;
    position: relative;
  }

  nav {
    position: absolute;
    bottom: 25px;
  }

  .nav {
    color: var(--color-light-green);
    text-decoration: none;
    font-family: var(--font-header);
    font-weight: 500;
    font-size: 1.5rem;
    padding: 2em;
  }

  .nav:hover {
    color: var(--color-green);
    text-decoration: underline;
  }
  
</style>

