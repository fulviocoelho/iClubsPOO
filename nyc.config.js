'use strict';

module.exports = {
    "all": true,
    "check-coverage": true,
    "extension": [".ts"],
    "include": [
        "app/src/**/*.ts"
    ],
    "exclude": [
        "app/src/repository/Data/**/*.*",
        "app/src/repository/DynamoDBDriver/**/*.*",
        "app/src/repository/MongoDBDriver/**/*.*",
        "**/*.spec.ts",
        "**/*.js"
    ],
    "settings": {
        "branches": 95,
        "lines": 95,
        "statements": 95,
        "functions": 100
    }
}