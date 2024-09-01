import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
    { files: ["**/*.{js,mjs,cjs,jsx}"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            "no-unused-vars": "off",
            "no-undef": "warn",
            "react/prop-types": "off",
            "react/no-unknown-property": "off",
        },
    },
    {
        ignores: ["**/node_modules/**", "tailwind.config.js", "dist/**"],
    },
    {
        settings: {
            react: {
                version: "detect",
            },
        },
    },
];
