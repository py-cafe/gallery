// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const title = 'Jupyter Cafe Menu';

/** @type {import('@docusaurus/types').Config} */
const config = {
	title,
	tagline: 'Create & share Jupyter recipes online',
	url: 'https://docs.jupyter.cafe',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	// favicon: "img/favicons/favicon.png",
	trailingSlash: true,

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'jupyter-cafe', // Usually your GitHub org/user name.
	projectName: 'menu', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// routeBasePath: "/",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					//   editUrl:
					//     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				// blog: {
				//   showReadingTime: true,
				//   // Please change this to your repo.
				//   // Remove this to remove the "edit this page" links.
				//   editUrl:
				//     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				// },
				theme: {
					customCss: [require.resolve('./src/scss/custom.scss')],
				},
			}),
		],
	],
	stylesheets: [
		'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap',
	],
	plugins: ['docusaurus-plugin-sass'],
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title,
				// logo: {
				//   alt: title,
				//   src: "img/logo-horizontal-dark.svg",
				//   srcDark: "img/logo-horizontal-light.svg",
				// },

				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'right',
						label: 'Recipes',
					},
					// { to: "/blog", label: "Blog", position: "left" },
					{
						href: 'https://github.com/jupyter-cafe/menu',
						position: 'right',
						className: 'header-github-link',
						'aria-label': 'GitHub repository',
					},
				],
			},
			footer: {
				style: 'dark',
				// links: [
				// 	{
				// 		title: 'Docs',
				// 		items: [
				// 			{
				// 				label: 'Tutorial',
				// 				to: '/docs/intro',
				// 			},
				// 		],
				// 	},
				// 	{
				// 		title: 'Community',
				// 		items: [
				// 			// {
				// 			// 	label: 'Stack Overflow',
				// 			// 	href: 'https://stackoverflow.com/questions/tagged/docusaurus',
				// 			// },
				// 			// {
				// 			// 	label: 'Discord',
				// 			// 	href: 'https://discordapp.com/invite/docusaurus',
				// 			// },
				// 			{
				// 				label: 'Twitter',
				// 				href: 'https://twitter.com/flojoy',
				// 			},
				// 		],
				// 	},
				// 	// {
				// 	// 	title: 'More',
				// 	// 	items: [
				// 	// 		{
				// 	// 			label: 'Blog',
				// 	// 			to: '/blog',
				// 	// 		},
				// 	// 		{
				// 	// 			label: 'GitHub',
				// 	// 			href: 'https://github.com/facebook/docusaurus',
				// 	// 		},
				// 	// 	],
				// 	// },
				// ],
				copyright: `Copyright © ${new Date().getFullYear()} ${title}, Inc.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
