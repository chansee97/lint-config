# lint-config

[![npm](https://img.shields.io/npm/v/@chansee97/eslint-config-vue?color=a1b858&label=)](https://npmjs.com/package/@chansee97/eslint-config-vue)

This is a repository that focuses on integrating ESLint, Stylelint, and Commitlint to set up code quality and consistency standards in your project. By implementing these tools helps you enforce proper coding styles, detect errors, and ensure clear commits in your GitHub projects.

- Auto fix for formatting with ESlint
- Mulit eslint config presets: JavaScript,TypeScript, Vue and React
- Format other files : json, yaml,markdown
- Consistent css,scss,less style by Stylelint
- Standardized commit information by Commitlint

## Usage

### Install
```bash
pnpm add -D eslint @chansee97/xxx-config
```

-  @chansee97/eslint-config-basic
-  @chansee97/eslint-config-ts
-  @chansee97/eslint-config-vue
-  @chansee97/eslint-config-react
-  @chansee97/stylelint-config
-  @chansee97/commitlint-config

### Config `.eslintrc`

```json
{
  "extends": "@chansee97/xxx-config"
}
```
### TypeScript Aware Rules

Type aware rules are enabled when a `tsconfig.eslint.json` is found in the project root, which will introduce some stricter rules into your project. If you want to enable it while have no `tsconfig.eslint.json` in the project root, you can change tsconfig name by modifying `ESLINT_TSCONFIG` env. 

```js
// .eslintrc.js
process.env.ESLINT_TSCONFIG = 'tsconfig.json'
module.exports = {
  extends: '@chansee97/eslint-config-vue'
}
```

### Add script for package.json

```json
{
  "scripts": {
    // eslint script example
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    // stylelint script example
    "stylelint:fix": "npx stylelint *.{css,scss,vue,less,html} --fix"
  }
}
```

### Extending the config

extend your config in `.eslintrc`, `.stylelinrc`, `commitlint.config.js`...

```json
{
  "extends": "@chansee97/xxx-config",
  "rules": {
    // your rules...
  }
}
```
### Lint Staged

If you want to apply lint and auto-fix before every commit, you can add the following to your `package.json`:

```json
{
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix"
    ],
    "*.{css,scss,less,html}": [
      "stylelint --fix"
    ],
    "*.vue": [
      "eslint --fix",
      "stylelint --fix"
    ]
  }
}
```

and then

```bash
npm i -D lint-staged simple-git-hooks
```

## Thanks
This repository is modified from [@antfu/eslint-config](https://github.com/antfu/eslint-config)
## License

[MIT License](./LICENSE.md)