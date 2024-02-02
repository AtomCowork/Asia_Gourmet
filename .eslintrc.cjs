module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['standard', 'plugin:astro/recommended', 'eslint-config-prettier'],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}', '*.astro'],
            parserOptions: {
                sourceType: 'script',
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro']
            },
            parser: 'astro-eslint-parser',
            rules: {}``
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'no-tabs': 'off',
        indent: 'off',
        'space-before-function-paren': 'off'
    }
}
