import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-md'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Pages({
      extensions: ['vue', 'md']
    }),
    Markdown(),
    ViteComponents({
      extensions: ['vue', 'md'],
      customLoaderMatcher: path => path.endsWith('.md')
    })
  ]
})
