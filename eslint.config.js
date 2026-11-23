module.exports = (async function config() {
  const { default: love } = await import('eslint-config-love')

  return [
    {
      ...love,
      files: ['**/*.js', '**/*.ts']
    },
    {
      files: ['**/*.ts'],
      rules: {
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/class-methods-use-this': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off'
      }
    }
  ]
})()