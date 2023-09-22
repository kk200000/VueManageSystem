<!-- 移动端 -->
<template>
  <main>
    <Moblie />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup>
import Moblie from '../components/Moblie.vue'
</script>
