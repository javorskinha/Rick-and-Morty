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
  }

  h1, li {
    font-family: var(--font-main);
    color: var(--color-dark-grey);
  }

  h1 {
    font-weight: 900;
    font-size: 4em;
    text-align: center;
    padding: 0.5em;
  }

  p{
    font-weight: 500;
    font-size: 1.5em;
    padding: 1em;
    text-align: justify;
  }

</style>
