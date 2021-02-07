const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = () => {
	return {
		mode: "production",
		entry: "./src/index.ts",
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: "ts-loader",
					exclude: /node_modules/,
				},
			],
		},
		resolve: {
			extensions: [".tsx", ".ts", ".js"],
		},
		output: {
			filename: "index.js",
			path: resolve(__dirname, "dist", "browser"),
		},
		plugins: [new CleanWebpackPlugin()],
		devtool: "inline-source-map",
	};
};
