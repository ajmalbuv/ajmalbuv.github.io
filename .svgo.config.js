export default {
	multipass: true,
	js2svg: {
		indent: 4,
		pretty: true,
		eol: "lf",
	},
	plugins: [
		"removeDoctype",
		"removeComments",
		"removeMetadata",
		"removeEmptyAttrs",
		"removeEmptyContainers",
		"cleanupAttrs",
		"removeUselessDefs",
		"convertStyleToAttrs",
		"convertColors",
		"convertPathData",
		"convertTransform",
		{
			name: "removeViewBox",
			active: false,
		},
		{
			name: "removeDimensions",
			active: true,
		},
	],
};
