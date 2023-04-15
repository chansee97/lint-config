# lint-config

[![npm](https://img.shields.io/npm/v/@chansee97/eslint-config-vue?color=a1b858&label=)](https://npmjs.com/package/@chansee97/eslint-config-vue)

This is a repository that focuses on integrating ESLint, Stylelint, and Commitlint to set up code quality and consistency standards in your project. By implementing these tools, the repository helps you enforce proper coding styles, detect errors, and ensure well-documented commits in your GitHub projects.

- Auto fix for formatting with ESlint
- Mulit eslint config presets: JavaScript,TypeScript, Vue and React
- Format other files : json, yaml,markdown
- Consistent css style by Stylelint
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

### Config `.eslintrc`

```json
{
  "extends": "@chansee97/xxx-config"
}
```

### Add script for package.json

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## License

[MIT License](./LICENSE.md)