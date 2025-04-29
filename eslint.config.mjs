import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { defineConfig, globalIgnores } from 'eslint/config';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default defineConfig([
  globalIgnores(['**/.next', '**/node_modules', '**/build', '**/dist', '**/public', 'eslint.config.mjs']),
  {
    extends: compat.extends(
      'next/core-web-vitals',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended'
    ),

    

    plugins: {
      '@typescript-eslint': typescriptEslint,
      'unused-imports': unusedImports
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },

        project: './tsconfig.json'
      }
    },

    rules: {
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'error',

      'import/newline-after-import': [
        'error',
        {
          count: 1
        }
      ],

      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', ['internal', 'parent', 'sibling', 'index'], ['object', 'unknown']],

          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before'
            },
            {
              pattern: 'next/**',
              group: 'builtin',
              position: 'before'
            },
            {
              pattern: 'lodash',
              group: 'external',
              position: 'before'
            },
            {
              pattern: 'zustand',
              group: 'external',
              position: 'before'
            },
            {
              pattern: '@reduxjs/**',
              group: 'external',
              position: 'before'
            },
            {
              pattern: 'react-hook-form',
              group: 'external',
              position: 'before'
            },
            {
              pattern: '@hookform/**',
              group: 'external',
              position: 'before'
            },
            {
              pattern: 'zod',
              group: 'external',
              position: 'before'
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before'
            },
            {
              pattern: '~/**',
              group: 'internal',
              position: 'before'
            },
            {
              pattern: '*.css',

              patternOptions: {
                matchBase: true
              },

              group: 'internal',
              position: 'after'
            }
          ],

          pathGroupsExcludedImportTypes: ['react', 'type'],

          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ],

      'newline-before-return': 'error',

      'import/no-duplicates': [
        'error',
        {
          'prefer-inline': false
        }
      ],

      'no-use-before-define': [
        'error',
        {
          functions: true,
          classes: true,
          variables: true,
          allowNamedExports: false
        }
      ],

      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false
        }
      ],

      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: ['export'],
          next: ['*']
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'return'
        },
        {
          blankLine: 'always',
          prev: 'directive',
          next: '*'
        },
        {
          blankLine: 'any',
          prev: 'directive',
          next: 'directive'
        },
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: '*'
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var']
        }
      ],

      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto'
        }
      ],

      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': 'error',
      'unused-imports/no-unused-imports': 'error'
    }
  }
]);
