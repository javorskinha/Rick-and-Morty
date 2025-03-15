<template id="app">
  <div id="main">
    <HeaderComponent/>
    <RouterView/>
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>


