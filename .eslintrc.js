module.exports = {
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  env: {
    node: true,
  },
  rules: {
    "no-console": 0,
    // style
    "semi": 1,
    "no-extra-semi": 1,
    "no-multi-spaces": 1,
    "array-bracket-spacing": 1,
    "block-spacing": 1,
    "comma-spacing": 1,
    "comma-dangle": [1, "always-multiline"],
    "computed-property-spacing": 1,
    "eol-last": 1,
    "indent": [1, 1],
    "keyword-spacing": 1,
    "linebreak-style": 1,
    "no-spaced-func": 1,
    "no-trailing-spaces": 1,
    "object-curly-spacing": 1,
    "quotes": [1, "single", "avoid-escape"],
    "semi": 1,
    "semi-spacing": 1,
    "space-before-blocks": 1,
    "space-before-function-paren": [1, "never"],
    "space-in-parens": 1,
    "space-infix-ops": 1,
    "space-unary-ops": 1,
    "arrow-spacing": 1,
    "generator-star-spacing": 1,
    "template-curly-spacing": 1,
    "yield-star-spacing": 1,
  }
};
