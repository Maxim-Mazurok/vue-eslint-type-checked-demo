/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // Use recommended settings for TypeScript
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser", // Forwarding to TypeScript ESLint Parser
    project: "./tsconfig.app.json",
    extraFileExtensions: [".vue"], // Consider .vue files
  },
  rules: {
    // You can override/add specific rules here
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/no-floating-promises": "error",
  },
};
