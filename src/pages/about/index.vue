<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const toggleDark = useToggle(useDark())
</script>

<template>
  <h1>/about/index.vue</h1>
  <navigation />
  <div>about page</div>
  <button class="m-3 text-sm btn" @click="toggleDark()">toggle</button>
</template>
