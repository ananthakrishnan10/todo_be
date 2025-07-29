import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  ...tseslint.config(
    {
      files: ['**/*.ts'],
      ignores: ['dist', 'node_modules'],
    },
    {
      languageOptions: {
        parserOptions: {
          project: './tsconfig.json',
        },
      },
      plugins: {
        prettier: eslintPluginPrettier,
      },
      rules: {
        'prettier/prettier': 'warn',
      },
    }
  ),
  prettierConfig,
];
