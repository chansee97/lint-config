const propertyGroups = require('./groups.js')

module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-less',
    'stylelint-config-standard-vue',
    'stylelint-config-html',
  ],
  plugins: ['stylelint-order', 'stylelint-less'],
  rules: {
    'order/properties-order': propertyGroups,
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
