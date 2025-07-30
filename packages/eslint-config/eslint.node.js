import js from "@eslint/js";
import turbo from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", "cdk.out", "**/*.generated.ts", "**/*.generated.d.ts"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.ts"],
    languageOptions: {
      ecmaVersion: 2020,
    },
    plugins: {
      turbo,
    },
    rules: {
      "no-console": "warn",
      "turbo/no-undeclared-env-vars": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
    },
    ignores: ["**/*.generated.ts", "**/*.generated.d.ts"],
  },
);
