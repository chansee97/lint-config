# lint-config

[![](https://img.shields.io/npm/v/@chansee97/eslint-config-vue?color=a1b858&label=)](https://npmjs.com/package/@chansee97/eslint-config-vue)

This is a repository that focuses on integrating ESLint, Stylelint, and Commitlint to set up code quality and consistency standards in your project. By implementing these tools helps you enforce proper coding styles, detect errors, and ensure clear commits in your GitHub projects.

- Auto fix for formatting with ESlint
- Mulit eslint config presets: JavaScript,TypeScript, Vue and React
- Format other files : json, yaml,markdown
- Check for syntax errors in SCSS and CSS with Stylelint
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

### Config Eslint

```bash
pnpm i -D eslint

echo '{"extends": "@chansee97/eslint-config-xxx"}' > .eslintrc
```
add script to `package.json`
```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
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

### Lint Staged

If you want to apply lint and auto-fix before every commit, you can add the following to your `package.json`:

```json
{
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  },
  "lint-staged": {
    "*.{js,jsx,,mjs,ts,tsx,json,,md,yml}": [
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
pnpm i -D lint-staged simple-git-hooks
// apply your hooks config
npx simple-git-hooks
```

### Lint CSS, SCSS
```bash
pnpm i -D stylelint

echo '{"extends": "@chansee97/stylelint-config"}' > .stylelintrc
```
add script to `package.json`
```json
{
  "scripts": {
    "stylelint:fix": "npx stylelint **/*.{css,scss,vue,less,html} --fix"
  }
}
```

Visual Studio Code

```json
{
  "stylelint.validate": [
    // ↓ Add "vue" language.
    "vue"
  ]
}
```

### Lint Commit information

If you want to constrain the Commit information of the project, you need add the following to your `package.json`:

```bash
pnpm i -D @commitlint/cli

echo '{"extends": "@chansee97/commitlint-config"}' > .commitlintrc
```

```json
{
  "simple-git-hooks": {
    "commit-msg": "npx --no-install commitlint --edit $HUSKY_GIT_PARAMS "
  }
}
```
### Extending the config

extend your config in `.eslintrc`, `.stylelintrc`, `.commitlintrc`...

```json
{
  "extends": "@chansee97/xxx-config",
  "rules": {
    // your rules...
  }
}
```

config alias

```js
 settings: {
'import/resolver': {
    node: { extensions: ['.js', '.mjs'] },
    // default alias
    alias: {
      map: [
        ['~', '.'],
        ['@', './src'],
      ],
      extensions: ['.js', '.jsx', '.mjs', '.cjs', '.ts', '.tsx', '.mts', '.cts'],
    },
  },
},
```


## Thanks
This repository is modified from [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## License

[MIT License](./LICENSE.md)