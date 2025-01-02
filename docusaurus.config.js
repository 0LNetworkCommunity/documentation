// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Libra Documentation',
  tagline: '...',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.openlibra.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.GITHUB_ACTIONS && process.env.GH_ACTION_DOCUSAURUS_BASE_URL ? `${process.env.GH_ACTION_DOCUSAURUS_BASE_URL}/` : "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '0LNetworkCommunity', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            // Main View
            // 'https://github.com/0LNetworkCommunity/documentation/blob/main/docs/',
            // Direct Edit (faster)
            'https://github.com/0LNetworkCommunity/documentation/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/thumbnail.png',
      navbar: {
        title: 'Open Libra Documentation',
        logo: {
          alt: 'Open Libra Logo',
          src: 'img/logo.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: '',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://warpcast.com/0lnetwork',
          //   label: 'Farcaster',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/0LNetworkCommunity/',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/0lnetwork',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://openlibra.io/',
            label: 'Website',
            position: 'right',
          },
        ],
      },

      footer: {
        links: [
          {
            title: null,
            items: [
              {
                html: `
                <div class="footer-left">
                  <a class="footer-logo" href="https://openlibra.io/" target="_blank" rel="noopener noreferrer" title="Open Libra">
                  <img src="/img/logo.png" alt="0L Network logo" />
                  </a>
                </div>
                `,
              },
            ],
          },
          {
            title: null,
            items: [
              {
                html: `
                  <p class="right">
                    <nav class="social-links">
                        <a class="social-link" href="https://github.com/0LNetworkCommunity/" target="_blank" rel="noopener noreferrer" title="Github">
                         <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47514 0 0 4.47514 0 10C0 14.4199 2.86679 18.1645 6.83855 19.4905C7.33579 19.5826 7.51995 19.2756 7.51995 19.0055C7.51995 18.7661 7.51381 18.14 7.50767 17.3051C4.72683 17.9067 4.13751 15.9668 4.13751 15.9668C3.68324 14.8128 3.0264 14.5058 3.0264 14.5058C2.11786 13.8858 3.09392 13.8981 3.09392 13.8981C4.09454 13.9718 4.62861 14.9294 4.62861 14.9294C5.51872 16.4579 6.96746 16.016 7.53837 15.7581C7.63045 15.1136 7.88827 14.6716 8.17066 14.4199C5.94843 14.1682 3.61571 13.3088 3.61571 9.47821C3.61571 8.38551 4.00246 7.4954 4.64702 6.79558C4.54266 6.54389 4.19889 5.52486 4.74524 4.14978C4.74524 4.14978 5.58625 3.87968 7.4954 5.17495C8.29343 4.95396 9.14672 4.84346 10 4.83732C10.8471 4.83732 11.7066 4.95396 12.5046 5.17495C14.4137 3.87968 15.2548 4.14978 15.2548 4.14978C15.8011 5.52486 15.4573 6.54389 15.353 6.79558C15.9914 7.4954 16.3781 8.38551 16.3781 9.47821C16.3781 13.3211 14.0393 14.1621 11.8109 14.4137C12.167 14.7207 12.4923 15.3346 12.4923 16.2676C12.4923 17.6059 12.48 18.6802 12.48 19.0117C12.48 19.2818 12.6581 19.5887 13.1676 19.4905C17.1393 18.1645 20 14.4199 20 10.0061C20 4.47514 15.5249 0 10 0Z" fill="currentColor"/></svg>
                        </a>
                        <a class="social-link" href="https://discord.gg/0lnetwork" target="_blank" rel="noopener noreferrer" title="Discord">
                          <svg width="100%" height="100%" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M60.105 4.898A58.55 58.55 0 0 0 45.653.415a.22.22 0 0 0-.233.11 40.784 40.784 0 0 0-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 0 0-.233-.11 58.386 58.386 0 0 0-14.451 4.483.207.207 0 0 0-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 0 0 .093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 0 0 .249-.082 42.08 42.08 0 0 0 3.627-5.9.225.225 0 0 0-.123-.312 38.772 38.772 0 0 1-5.539-2.64.228.228 0 0 1-.022-.378 31.17 31.17 0 0 0 1.1-.862.22.22 0 0 1 .23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 0 1 .233.027c.356.293.728.586 1.103.865a.228.228 0 0 1-.02.378 36.384 36.384 0 0 1-5.54 2.637.227.227 0 0 0-.121.315 47.249 47.249 0 0 0 3.624 5.897.225.225 0 0 0 .249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 0 0 .092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 0 0-.093-.084Zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156Zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156Z" fill="currentColor"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h71v55H0z"/></clipPath></defs></svg>
                        </a>
                    </nav>
                  </p>
              `,
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ['bash', 'diff', 'json'],
      },
      algolia: {
        appId: "E8UE0IN6GG",
        apiKey: "6372b13879569a530272b0bb39cfd108",
        indexName: "openlibra",
        contextualSearch: true,
        debug: false,
      },
    }),
    plugins: [
      [
        '@docusaurus/plugin-client-redirects',
        {
          redirects: [
            {
              to: '/category/archive',
              from: '/archive',
            },
          ],
        },
      ],
    ],
};

module.exports = config;
