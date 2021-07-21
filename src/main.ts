import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from 'virtual:generated-pages'
import 'vue-global-api'

import 'virtual:windi.css'
import './styles/main.css'

export const createApp = ViteSSG(
  App,
  { routes }
)
