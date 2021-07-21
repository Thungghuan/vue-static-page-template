<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { useRouter } from 'vue-router'

const router = useRouter()
const toggleDark = useToggle(useDark())
</script>

<template>
  <h1>/about/index.vue</h1>
  <navigation />
  <div>about page</div>
  <button class="m-3 text-sm btn" @click="toggleDark()">toggle</button>
  <button class="m-3 text-sm btn" @click="router.push('/about/subpage')">Subpage</button>
</template>
