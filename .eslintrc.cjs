/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-typescript",
        "@vue/eslint-config-prettier/skip-formatting"
    ],
    parserOptions: {
        ecmaVersion: "latest"
    },
    rules: {
        quotes: ["error", "double"],  // Использовать двойные кавычки.
        semi: ["error", "always"],  // Всегда добавлять точку с запятой в конце утверждения.
        indent: ["error", 4],  // Отступ — это два пробела.
        // "no-console": "error"  // Избегать использования в коде методов на консоли (`console`).
    }
};
