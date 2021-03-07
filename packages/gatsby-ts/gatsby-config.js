module.exports = {
  siteMetadata: {
    title: 'sehyunchung.dev',
    author: 'Sehyun Chung',
    description: 'Yet another dev blog (in Korean).',
    siteUrl: 'https://sehyunchung.dev/',
    social: {
      twitter: 'sehyunchung',
      github: 'sehyunchung',
      facebook: 'sxhyxnchxng',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'public',
              ignoreFileExtensions: [],
            },
          },
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              theme: 'Light+ (Default Light)',
              replaceColor: (oldColor) =>
                ({
                  '#000000': 'var(--color-code-txt)',
                }[oldColor.toLowerCase()] || oldColor),
            },
          },
          'gatsby-remark-smartypants',
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-135916528-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'sehyunchung.dev',
        short_name: 'sehyunchung.dev',
        start_url: '/',
        background_color: '#4351b0',
        theme_color: '#4351b0',
        display: 'minimal-ui',
        icon: './static/img/thinking-face.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-remark-responsive-iframe',
    'gatsby-plugin-typescript',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-splitbee',
  ],
}
