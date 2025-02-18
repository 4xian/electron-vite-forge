<template>
  <div class="about">
    <HelloWorld msg="关于页面" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
