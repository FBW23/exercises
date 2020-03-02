module.exports = {
    "env": {
        "browser": true,
<<<<<<< HEAD
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended"
=======
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
>>>>>>> a7a0015a16810ec9d371e1d227826cd72f0578ea
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
<<<<<<< HEAD
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
=======
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
>>>>>>> a7a0015a16810ec9d371e1d227826cd72f0578ea
    }
};