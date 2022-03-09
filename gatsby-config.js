module.exports = {
	siteMetadata: {
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Roboto Mono`,
					`Roboto Mono\:100`,
					`Roboto Mono\:200`,
					`Roboto Mono\:300`,
					`Roboto Mono\:400`,
					`Roboto Mono\:700`,
				],
				display: "swap",
			},
		},
		`gatsby-plugin-anchor-links`,
	],
};
