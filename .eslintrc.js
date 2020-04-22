module.exports = {
    "env": {
<<<<<<< HEAD
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
=======
        "es6": true,
        "node": true
    },
>>>>>>> 7d5610813bd7566f8a0f9f8347e89f9db5b36262
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
<<<<<<< HEAD
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
=======
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
>>>>>>> 7d5610813bd7566f8a0f9f8347e89f9db5b36262
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
<<<<<<< HEAD
        "react"
=======
        "@typescript-eslint"
>>>>>>> 7d5610813bd7566f8a0f9f8347e89f9db5b36262
    ],
    "rules": {
    }
};