module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint/eslint-plugin'
  ],
  ignorePatterns: [
    '.bundle/',
    'node_modules/',
    'public/packs*/',
    'tmp/',
    'vendor/bundle/'
  ],
  rules: {
  }
}
