import eslintConfigPrettier from "eslint-config-prettier";

export default [
	{
		files: ["eslint.config.js", "build.mjs"],
		languageOptions: {
			sourceType: "module",
		},
	},
	eslintConfigPrettier,
];
