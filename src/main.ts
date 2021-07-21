import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import 'vue-global-api'
import { createHead } from '@vueuse/head'

import 'virtual:windi.css'
import './styles/main.css'

const head = createHead()

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App)
  .use(router)
  .use(head)
  .mount('#app')
