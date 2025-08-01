import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import turbo from "eslint-plugin-turbo";
import tsEslint from "typescript-eslint";

export default tsEslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tsEslint.configs.recommended,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      turbo,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "no-console": "warn",
      "turbo/no-undeclared-env-vars": "warn",
    },
    ignores: ["**/*.generated.ts", "**/*.generated.d.ts"],
  },
);
