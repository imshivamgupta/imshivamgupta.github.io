module.exports = {
  env: {
    browser: true
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier-vue/recommended',
    'prettier/vue'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  plugins: ['vue', 'prettier'],
  root: true,
  rules: {
    'no-console': 'off',
    'prettier-vue/prettier': 'off'
  }
}
