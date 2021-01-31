const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = () => {
	return {
		mode: "production",
		entry: {
			client: "./src/index.js",
		},
		output: {
			filename: "index.js",
			path: resolve(__dirname, "dist"),
		},
		plugins: [new CleanWebpackPlugin()],
		devtool: "inline-source-map",
	};
};
