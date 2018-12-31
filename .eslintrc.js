module.exports = exports = {

    "globals": {
        "$": false,
        "angular": false,
        "module": false,
        "inject": false,
        "window": true,
        "localStorage": true,
        "require": true,
        "document":true,
        "Chart":true
    },
    "env": {
        "es6": true
    },
    "extends": "airbnb",
    "rules": {
        "max-len": ["error", { "code": 150 }],
        "linebreak-style": 0,
        "indent": ["error", 4],
        "no-param-reassign": 0,
        "arrow-body-style": 0,
        "react/destructuring-assignment": 0,
        "array-callback-return" : 0,
        "consistent-return" : 0
    }
};