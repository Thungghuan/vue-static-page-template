# /markdown/index.md

<navigation />

> Thank for `vite-plugin-md` with `vite-plugin-components`

<div class="w-160 mx-auto">

```ts
import Markdown from 'vite-plugin-md'
import ViteComponents from 'vite-plugin-components'

export default {
  plugins: [
    Markdown(),
    // should be placed after `Markdown()`
    ViteComponents({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      customLoaderMatcher: path => path.endsWith('.md'),
    })
  ],
}
```

</div>