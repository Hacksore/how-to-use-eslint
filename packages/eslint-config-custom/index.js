/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  env: {
    browser: true,
    es2015: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  plugins: ["react"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: "latest",
    ecmaVersion: {
      jsx: true,
    },
  },
  rules: {
    quotes: ["error", "double"],
  },
};

module.exports = config;
