import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import perfectionist from 'eslint-plugin-perfectionist'

const compat = new FlatCompat()

export default antfu(
  {
    rules: {
      'tailwindcss/migration-from-tailwind-2': 'off',
      'tailwindcss/no-custom-classname': 'off',
    },
  },
  ...compat.config({
    extends: [
      'plugin:tailwindcss/recommended',
      'plugin:react-hooks/recommended',
    ],
  }),

  // perfectionist
  {
    rules: {
      'import/order': 'off',
      ...perfectionist.configs['recommended-natural'].rules,
    },
  },
  // expo
  {
    rules: {
      'ts/no-require-imports': 'off',
    },
  },
  ...compat.config({
    ignorePatterns: [
      'scripts',
    ],
  }),
)
