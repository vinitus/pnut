module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["airbnb", "airbnb/hooks", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y", "import", "react-hooks", "prettier"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "react/prop-types": "off",
    "react/function-component-definition": [
      2,
      { namedComponents: ["arrow-function"] },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
