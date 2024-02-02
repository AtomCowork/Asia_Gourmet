module.exports = {
    printWidth: 100,
    semi: false,
    singleQuote: true,
    jsxSingleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    useTabs: false,
    plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
    pluginSearchDirs: false,
    overrides: [
        {
            files: ['*.json', '*.md', '*.toml', '*.yml', '*.astro'],
            options: {
                useTabs: false
            }
        }
    ],
    endOfLine: 'lf',
    bracketSpacing: true,
    quoteProps: 'as-needed',
    arrowParens: 'avoid',
    htmlWhitespaceSensitivity: 'css',
    bracketSameLine: false
}
