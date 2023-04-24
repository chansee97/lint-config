const propertyGroups = require('./groups.js')

module.exports = {
  extends: [
    'stylelint-config-html',
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
    'stylelint-config-standard-vue',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-order': propertyGroups,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['/^view-transition/'],
      },
    ],
  },
  ignoreFiles: [
    'node_modules',
    'dist',
    'public',
    'output',
    'coverage',
    'temp',
    '*.js',
    '*.cjs',
    '*.mjs',
    '*.ts',
    '*.tsx',
    '*.svg',
    '*.gif',
    '*.md',
  ],
}
