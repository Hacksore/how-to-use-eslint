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
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: {
    },
  },
  rules: {
    "react/jsx-uses-react": "error",
    "react/react-in-jsx-scope": "off",
    quotes: ["error", "double"],
  },
};

module.exports = config;
