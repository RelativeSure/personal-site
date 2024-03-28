import {themes as prismThemes} from 'prism-react-renderer';

export default {
  title: "Rasmus Personal Site",
  tagline: 'Intro, personal and more',
  url: 'https://rasmusj.dk',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
  ],

  themes: [
    '@saucelabs/theme-github-codeblock'
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl: ({versionDocsDirPath, docPath}) =>
            `https://github.com/relativesure/personal-site/edit/master/${versionDocsDirPath}/${docPath}`,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Rasmus Brøgger Jørgensen',
        hideOnScroll: true,
        items: [
          {
            type: 'dropdown',
            label: 'Socials',
            position: 'left',
            items: [
              {
                href: 'https://infosec.exchange/@relativesure',
                label: 'Mastodon',
              },
              {
                href: 'https://github.com/RelativeSure',
                label: 'GitHub',
              },
            ]
          }
        ],
      },
      algolia: {
        appId: "08LOM48KL6",
        apiKey: "9040120b066483377aca58da7b7aaba3",
        indexName: "rasmusjv2",
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'bash',
          'diff',
          'json',
          'markdown',
          'powershell',
          'yaml',
          'git',
          'nginx',
          'docker',
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Personal site. Built with Docusaurus.`,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      }
    }),
};
