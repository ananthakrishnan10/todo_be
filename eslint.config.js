import parser from '@typescript-eslint/parser';
import * as tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default tseslint.config({
  languageOptions: {
    parser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  files: ['**/*.ts'],
  ignores: ['node_modules', 'dist'],
  plugins: {
    prettier: eslintPluginPrettier,
  },
  rules: {
    'prettier/prettier': 'warn',
  },
});
