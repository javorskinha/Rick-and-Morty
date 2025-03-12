<template id="app">
  <div>
    <HeaderComponent/>
    <RouterView/>
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<style>
  .father{
    display: grid;
    place-self: center;
    padding: 20px;
    margin: 3em;
    background-color: var(--color-light-green);
    width: 90%;
    max-width: 1200px;
    height: auto;
    border-radius: 15px;
    border: solid 1px var(--color-medium-green);
    font-family: var(--font-main);
  }

  li {
    color: var(--color-dark-grey);
  }

  h1 {
    font-weight: 900;
    font-size: 4em;
    text-align: center;
    padding-top: 0.5em;
  }

  h2, h3 {
    font-weight: 800;
    font-size: 2em;
    padding-top: 0.5em;
  }

  p{
    font-weight: 500;
    font-size: 1.5em;
    padding: 0.5em;
    text-align: justify;
  }

  .list {
    display: grid;
    grid-template-columns: 50% 50%;
    margin: 2em;
    border: solid 2px var(--color-black);
    border-radius: 15px;
    padding: 2em;
    background-color: rgba(230, 216, 216, 0.822);
    background-position: 55%;
    background-size: cover;
    background-blend-mode: overlay;
  }

  #button{
      display: flex;
      justify-content: center;
  }
</style>
