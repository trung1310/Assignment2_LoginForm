module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    // specify the JavaScript language options want to support
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "airbnb"],
    rules: {
      semi: 1,
      quotes: [2, "single"],
      "react/prop-types": 1,
    },
  },
};
