import js from '@eslint/js';
import globals from 'globals';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node
      }
    },
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      'object-curly-spacing': ['warn', 'always'],
      '@stylistic/js/space-in-parens': ['warn', 'always']
    }
  }
];