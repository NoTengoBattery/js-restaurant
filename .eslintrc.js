module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true
    },
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'html',
    'prettier',
    'import'],
  ignorePatterns: [
    'node_modules/',
    'dist/'
  ],
  rules: {
  }
}
