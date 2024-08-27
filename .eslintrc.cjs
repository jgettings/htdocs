module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  plugins: ['react-refresh', '@typescript-eslint', 'import', 'jest', 'promise'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended',
    'plugin:react-hooks/recommended',
    'plugin:promise/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:tailwindcss/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'jest.config.js'],
  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: './tsconfig.app.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: './',
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/no-unresolved': 'error',
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'operator-linebreak': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    // turned off because they were conflicting with prettier
    'no-confusing-arrow': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'object-curly-newline': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.test.*', 'jest-setup.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    tailwindcss: {
      callees: ['twMerge', 'createTheme'],
      classRegex: '^(class(Name)|theme)?$',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
