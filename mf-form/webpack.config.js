const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
	const defaultConfig = singleSpaDefaults({
		orgName: "fgaviria",
		projectName: "Form",
		webpackConfigEnv,
		argv,
		externals: ["single-spa", "@fgaviria/store$"],
	});

	//defaultConfig.externals = ["single-spa", /^@fgaviria\/store$/];

	return merge(defaultConfig, {
		// modify the webpack config however you'd like to by adding to this object
	});
};
