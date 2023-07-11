module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"prettier",
		"plugin:jest/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsconfigRootDir: "./",
		project: "./tsconfig.json",
	},
	ignorePatterns: [".eslintrc.js"],
	plugins: ["@typescript-eslint", "react-hooks"],
	globals: {
		JSX: true,
	},
	settings: {
		react: {
			version: "detect",
		},
		"import/resolver": {
			typescript: {},
			typescript: true,
			node: {
				extensions: [".ts", ".tsx", ".js", ".jsx"],
			},
		},
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx", ".js", ".jsx"],
		},
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx", ".js", ".jsx"],
			rules: {
				"@typescript-eslint/prefer-for-of": "off",
				"react-hooks/rules-of-hooks": "error", // For checking rules of hooks
				"react-hooks/exhaustive-deps": "warn", // For checking hook dependencies
				"@typescript-eslint/no-shadow": "off",
				"@typescript-eslint/no-undef": "off",
				radix: "error",
				eqeqeq: "error",
				"no-shadow": "off",
				"no-bitwise": "off",
				"prettier/prettier": "off",
				"jsx-quotes": ["warn", "prefer-double"],
				"func-call-spacing": "off", // conflict
				"@typescript-eslint/func-call-spacing": "warn",
				"keyword-spacing": "off", // conflict
				"@typescript-eslint/keyword-spacing": "warn",
				"@typescript-eslint/member-delimiter-style": "warn",
				"@typescript-eslint/restrict-plus-operands": "error",
				semi: "off",
				"arrow-spacing": ["warn", { before: true, after: true }],
				"block-spacing": ["warn", "always"],
				"key-spacing": "warn",
				"max-len": ["warn", { code: 120 }],
				"no-lonely-if": "warn",
				"no-multiple-empty-lines": ["warn", { max: 2 }],
				"no-trailing-spaces": "warn",
				"no-useless-escape": "warn",
				"no-unneeded-ternary": "warn",
				"no-unused-vars": "off", // conflict
				"no-var": "error",
				"prefer-const": "error",
				quotes: ["warn", "double", { avoidEscape: true, allowTemplateLiterals: true }],
				"import/no-duplicates": ["error"],
				"no-void": "off",
				"@typescript-eslint/no-var-requires": "error",
				"react/no-unstable-nested-components": ["error", { allowAsProps: true }],
				"import/no-named-as-default-member": ["off"],
				"import/no-named-as-default": ["off"],
				"import/default": ["off"],
				"@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
				"react/self-closing-comp": ["off"],
				"import/no-unresolved": "off",
			},
		},
	],
};
