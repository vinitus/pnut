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
    "react/react-in-jsx-scope": "off",
    "react/jsx-fragments": "off",
    "react/destructuring-assignment": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/img-redundant-alt": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "no-console": "off",
    "func-names": "off",
    "no-shadow": "off",
    "no-else-return": "off",
    "prefer-const": "off",
    "object-shorthand": "off",
    "consistent-return": "off",
    "no-param-reassign": "off",
    "no-use-before-define": "off",
    "no-useless-return": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
