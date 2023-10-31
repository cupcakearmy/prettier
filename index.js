/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
export default {
  semi: false,
  singleQuote: true,
  printWidth: 120,
  trailingComma: 'all',

  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-packagejson'],
  importOrder: ['<BUILT_IN_MODULES>', '', '<THIRD_PARTY_MODULES>', '', '^[$]', '', '^[.]'],
}
