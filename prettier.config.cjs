const config = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 80,
  useTabs: false,
  endOfLine: 'auto',
  plugins: ['prettier-plugin-tailwindcss'],
  // tailwindcss
  tailwindAttributes: ['theme'],
  tailwindFunctions: ['twMerge', 'createTheme', 'tw'],
};

module.exports = config;
