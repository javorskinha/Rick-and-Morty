<template>
    <img src="" alt="">
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


