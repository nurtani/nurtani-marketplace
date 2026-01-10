import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";
import react from "eslint-plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default defineConfig([{
  extends: compat.extends("next/core-web-vitals"),

  plugins: {
    react,
    "@typescript-eslint": typescriptEslint,
  },

  languageOptions: {
    parser: tsParser,
    ecmaVersion: 12,
    sourceType: "module",

    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },

  rules: {
    indent: ["error", 2],
    "jsx-quotes": ["error", "prefer-double"],
    "react/react-in-jsx-scope": 0,
    "react/jsx-uses-react": 0,
    "react-hooks/exhaustive-deps": 0,

    "no-unused-vars": ["warn", {
      args: "none",
    }],

    "no-console": ["warn", {
      allow: ["error"],
    }],

    "no-multiple-empty-lines": ["error", {
      max: 1,
      maxEOF: 0,
    }],

    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": "warn",

    "@typescript-eslint/consistent-type-imports": ["error", {
      prefer: "type-imports",
    }],

    "sort-imports": ["error", {
      ignoreCase: true,
      ignoreDeclarationSort: true,
    }],

    "import/order": [1, {
      groups: ["external", "builtin", "internal", "sibling", "parent", "index"],

      pathGroups: [{
        pattern: "components",
        group: "internal",
      }, {
        pattern: "common",
        group: "internal",
      }, {
        pattern: "routes/ **",
        group: "internal",
      }, {
        pattern: "assets/**",
        group: "internal",
        position: "after",
      }],

      pathGroupsExcludedImportTypes: ["internal"],

      alphabetize: {
        order: "asc",
        caseInsensitive: true,
      },
    }],
  },
}]);