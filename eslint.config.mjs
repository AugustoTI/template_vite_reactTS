import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import eslintReact from 'eslint-plugin-react'
import eslintReactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  jsxA11y.flatConfigs.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
  },
  {
    ignores: [
      'node_modules',
      'public/**',
      'coverage/**',
      '.vscode/**',
      '.public/**',
      '*.tsbuildinfo',
      'pnpm-lock.yaml',
      '!.storybook',
    ],
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      react: eslintReact,
      'react-hooks': eslintReactHooks,
    },
    rules: {
      ...eslintReact.configs.flat.recommended.rules,
      ...eslintReact.configs.flat['jsx-runtime'].rules,
      ...eslintReactHooks.configs.recommended.rules,
      'react/prop-types': 'off',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
)
