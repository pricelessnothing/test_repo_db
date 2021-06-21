module.exports = {
  env: {
    browser: false,
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        trailingComma: 'all',
        semi: false,
        eolLast: 'always',
        singleQuote: true,
      },
    ],
    quotes: ['error', 'single'],
  },
}
