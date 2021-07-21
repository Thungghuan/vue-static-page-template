<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Vite App',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
  ],
})
</script>

<template>
  <router-view />
</template>

<style>
* {
  text-align: center;
}
</style>