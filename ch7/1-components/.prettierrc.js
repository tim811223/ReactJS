// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: 'es5',
  tabWidth: 2, //指定每個縮排等級的空格數。
  semi: true, //在語句末尾列印分號。
  singleQuote: true, //使用單引號而不是雙引號。
};

export default config;
