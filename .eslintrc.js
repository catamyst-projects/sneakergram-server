module.exports = {
  plugins: ["prettier"],
  extends: "eslint:recommended",
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
  },
};
