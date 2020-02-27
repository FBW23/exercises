{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react-hooks"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
    "jest": true
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  "rules": {
    "array-bracket-newline": [
      2,
      "consistent"
    ],
    "array-bracket-spacing": 2,
    "arrow-body-style": [
      2,
      "as-needed"
    ],
    "arrow-parens": [
      2,
      "as-needed"
    ],
    "arrow-spacing": 2,
    "array-callback-return": 2,
    "block-spacing": 2,
    "brace-style": 2,
    "camelcase": 2,
    "comma-dangle": [
      0,
      "always-multiline"
    ],
    "comma-spacing": 2,
    "comma-style": 2,
    "computed-property-spacing": 2,
    "curly": [
      2,
      "multi-line",
      "consistent"
    ],
    "default-case": 1,
    "dot-location": [
      2,
      "property"
    ],
    "eol-last": 2,
    "eqeqeq": 2,
    "func-call-spacing": 2,
    "func-name-matching": 2,
    "function-paren-newline": 0,
    "guard-for-in": 2,
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "jsx-quotes": 1,
    "key-spacing": 2,
    "keyword-spacing": 2,
    "lines-between-class-members": [
      2,
      "always",
      {
        "exceptAfterSingleLine": true
      }
    ],
    "max-statements-per-line": 2,
    "multiline-ternary": [
      2,
      "always-multiline"
    ],
    "new-parens": 2,
    "newline-per-chained-call": [
      2,
      {
        "ignoreChainWithDepth": 2
      }
    ],
    "no-console": 0,
    "no-duplicate-imports": 2,
    "no-else-return": 2,
    "no-empty-function": 2,
    "no-floating-decimal": 2,
    "no-lone-blocks": 2,
    "no-lonely-if": 2,
    "no-mixed-operators": [
      2,
      {
        "groups": [
          [
            "+",
            "-",
            "*",
            "/",
            "%",
            "**"
          ],
          [
            "&",
            "|",
            "^",
            "~",
            "<<",
            ">>",
            ">>>"
          ],
          [
            "==",
            "!=",
            "===",
            "!==",
            ">",
            ">=",
            "<",
            "<="
          ],
          [
            "&&",
            "||"
          ],
          [
            "in",
            "instanceof"
          ]
        ],
        "allowSamePrecedence": true
      }
    ],
    "no-multi-assign": 2,
    "no-multiple-empty-lines": 2,
    "no-negated-condition": 2,
    "no-multi-spaces": 2,
    "no-param-reassign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-template-curly-in-string": 2,
    "no-throw-literal": 2,
    "no-unneeded-ternary": 2,
    "no-useless-computed-key": 2,
    "no-useless-constructor": 2,
    "no-useless-concat": 2,
    "no-useless-return": 2,
    "no-whitespace-before-property": 2,
    "object-curly-newline": [
      2,
      {
        "consistent": true
      }
    ],
    "one-var-declaration-per-line": 2,
    "prefer-const": [
      2,
      {
        "destructuring": "all"
      }
    ],
    "prefer-promise-reject-errors": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "require-await": 2,
    "rest-spread-spacing": 2,
    "semi": [
      2,
      "always",
      {
        "omitLastInOneLineBlock": true
      }
    ],
    "semi-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],
    "space-before-function-paren": [
      2,
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "space-infix-ops": 2,
    "space-unary-ops": [
      2,
      {
        "words": true,
        "nonwords": false
      }
    ],
    "switch-colon-spacing": 2,
    "template-curly-spacing": 2,
    "wrap-iife": [
      2,
      "inside"
    ],
    "yoda": 2,
    // React Plugin
    "react/boolean-prop-naming": [
      2,
      {
        "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+",
        "validateNested": true
      }
    ],
    "react/button-has-type": 2,
    "react/default-props-match-prop-types": 2,
    "react/forbid-prop-types": 2,
    "react/jsx-boolean-value": [
      2,
      "never"
    ],
    "react/jsx-child-element-spacing": 2,
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-curly-newline": [
      2,
      "consistent"
    ],
    "react/jsx-curly-spacing": 2,
    "react/jsx-equals-spacing": 2,
    "react/jsx-first-prop-new-line": 2,
    "react/jsx-fragments": [
      2,
      "element"
    ],
    "react/jsx-indent": [
      2,
      2,
      {
        "checkAttributes": true,
        "indentLogicalExpressions": true
      }
    ],
    "react/jsx-indent-props": [
      2,
      2
    ],
    "react/jsx-max-props-per-line": [
      2,
      {
        "maximum": 3
      }
    ],
    "react/jsx-no-bind": [
      2,
      {
        "allowArrowFunctions": true
      }
    ],
    "react/jsx-no-comment-textnodes": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-pascal-case": [
      2,
      {
        "allowAllCaps": true
      }
    ],
    "react/jsx-props-no-multi-spaces": 2,
    "react/jsx-props-no-spreading": 2,
    "react/jsx-tag-spacing": 2,
    "react/jsx-wrap-multilines": [
      2,
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line"
      }
    ],
    "react/no-access-state-in-setstate": 2,
    "react/no-array-index-key": 1,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-redundant-should-component-update": 2,
    "react/no-this-in-sfc": 2,
    "react/no-typos": 2,
    "react/no-unused-prop-types": 2,
    "react/no-unused-state": 2,
    "react/prefer-es6-class": 2,
    "react/prefer-stateless-function": 2,
    "react/require-default-props": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 2,
    "react/style-prop-object": 2,
    "react/void-dom-elements-no-children": 2
    // React-Hooks Plugin
    // "react-hooks/rules-of-hooks": 2,
    // "react-hooks/exhaustive-deps": 1
  }
}
