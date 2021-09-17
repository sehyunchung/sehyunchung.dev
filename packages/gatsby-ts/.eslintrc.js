module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'react/jsx-uses-vars': 1,
    'react/react-in-jsx-scope': 'off',
  },
  parser: 'babel-eslint',
  env: { node: true },
}
