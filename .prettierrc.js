/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
export default {
  semi: false,
  printWidth: 120,

  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-packagejson"],
  importOrder: ["<BUILT_IN_MODULES>", "", "<THIRD_PARTY_MODULES>", "", "^[$]", "", "^[.]"],
}
