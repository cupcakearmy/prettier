# Prettier Config

## Installation

```bash
pnpm add -D @nicco.io/prettier
```

```javascript
// .prettierrc.js

import config from '@nicco.io/prettier'

export default {
  ...config,
}
```

## Included

- [Sort imports](https://github.com/IanVS/prettier-plugin-sort-imports)
- [Sort package.json](https://github.com/matzkoh/prettier-plugin-packagejson)
- Some custom preference settings

## Recipes

### Svelte

```js
// .prettierrc.js
import preset from '@nicco.io/prettier'

export default {
  ...preset,
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
  plugins: [...preset.plugins, 'prettier-plugin-svelte'],
}
```
