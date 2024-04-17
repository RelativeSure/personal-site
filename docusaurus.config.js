import {themes as prismThemes} from 'prism-react-renderer';

export default {
  title: "Rasmus Personal Site",
  tagline: 'Intro, personal and more',
  url: 'https://old.rasmusj.dk',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs',
        routeBasePath: '/',
        // sidebarPath: './sidebars.js',
        sidebarPath: require.resolve('./sidebars.js'),
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
        editUrl: ({versionDocsDirPath, docPath}) =>
          `https://github.com/relativesure/personal-site/edit/master/${versionDocsDirPath}/${docPath}`,
      }
    ],
    [
      '@docusaurus/theme-classic',
      {
        customCss: './src/css/custom.css',
      },
    ],
  ],

  themes: [
    '@saucelabs/theme-github-codeblock',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: "/",
      }),
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
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
    footer: {
      copyright: `@${new Date().getFullYear()} Personal site. Built with Docusaurus.`,
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
  },
};
