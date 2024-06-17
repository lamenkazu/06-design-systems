module.exports = {
    extends: ["@rocketseat/eslint-config/react"],
    plugins: ["simple-import-sort"],
    rules: {
      "simple-import-sort/imports": "error"
    },
    parserOptions: {
      sourceType: "module",
      ecmaVersion: "latest"
    }
}