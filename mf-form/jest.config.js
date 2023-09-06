module.exports = {
	rootDir: "src",
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.(j|t)sx?$": "babel-jest",
	},
	moduleNameMapper: {
		"\\.(css)$": "identity-obj-proxy",
		"single-spa-react/parcel": "single-spa-react/lib/cjs/parcel.cjs",
	},
	setupFilesAfterEnv: ["@testing-library/jest-dom"],
	testMatch: [
		"**/__tests__/**/*.[jt]s?(x)",
		"**/?(*.)+(spec|test).[jt]s?(x)",
		"!**/util.test.js",
	],
};
