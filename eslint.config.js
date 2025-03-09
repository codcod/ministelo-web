import globals from 'globals';
import pluginJs from '@eslint/js';
import tsparser from '@typescript-eslint/parser';
import pluginTs from '@typescript-eslint/eslint-plugin';
import pluginImport from 'eslint-plugin-import';
import pluginJSDoc from 'eslint-plugin-jsdoc';
import cssPlugin from 'eslint-plugin-css';

export default [
    {
        files: ['src/**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true
                },
                project: './tsconfig.json'
            },
            globals: {
                ...globals.browser,
                JSX: true,
                Bun: true,
                process: true
            }
        },
        plugins: {
            '@typescript-eslint': pluginTs,
            import: pluginImport,
            jsdoc: pluginJSDoc,
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'off',
            'no-mixed-spaces-and-tabs': 'off',
            'no-case-declarations': 'off',
            'no-extra-semi': 'off',
            'import/no-unresolved': ['error', {ignore: ['hono/bun']}],
            'import/order': ['warn', {'newlines-between': 'always'}],
            'jsdoc/check-alignment': 'warn',
            'jsdoc/check-indentation': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/explicit-module-boundary-types': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-inferrable-types': 'warn',
            '@typescript-eslint/consistent-type-imports': 'warn'
        }
    },
    pluginJs.configs.recommended,
    {
        settings: {
            react: {
                version: '18.2.0'
            }
        }
    },
    {
        ignores: ['example/*', 'test/**/*', 'bun.lock']
    },
    cssPlugin.configs['flat/recommended']
];
