module.exports = {
  env: {
    browser: false,
    es2021: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base', 'prettier', 'jest'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 2,
  },
};
