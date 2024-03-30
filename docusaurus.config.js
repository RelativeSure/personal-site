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

  // Required for GitHub Pages
  organizationName: "RelativeSure",
  projectName: "personal-site",
  deploymentBranch: "master",

  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),

'@docusaurus/plugin-content-docs',
      {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl: ({versionDocsDirPath, docPath}) =>
            `https://github.com/relativesure/personal-site/edit/master/${versionDocsDirPath}/${docPath}`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
  ],

  themes: [
    '@saucelabs/theme-github-codeblock',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: "/",

        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
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
