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
    margin: 1.5em;
    padding: 0.5em;
    border: solid 3px var(--color-black);
    border-radius: 10px;
    position: relative;
    transition: 0.3s ease all;
    z-index: 1;
  }

  .nav::before{
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 0;
    right: 100%;
    bottom: 0;
    opacity: 0;
    content:'';
    background-color: #00FF00;
    z-index: -1;
  }

  .nav:hover, .nav:focus {
    color: var(--color-black);
  }

  .nav:hover:before, .nav:focus:before {
	  transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity:1;
}

  .nav:active {
    transform: scale(0.9);
  }
  
</style>

