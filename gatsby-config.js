module.exports = {
  siteMetadata: {
    title: `sehyunchung`,
    author: `Sehyun Chung`,
    description: `yet another dev log`,
    siteUrl: `https://sehyunchung.github.io/`,
    social: {
      twitter: `cong__vu`,
      github: `sehyunchung`,
      facebook: `sxhyxnchxng`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'public',
              ignoreFileExtensions: [],
            },
          },
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: {
                sh: 'bash',
                js: 'javascript',
              },
              showLineNumbers: true,
              numberLines: true,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-135916528-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          // {
          // family: `Roboto`,
          // variants: [`400`, `700`],
          // subsets: [`latin`],
          // },
          {
            family: `Fira Sans`,
            variants: [`400`, `700`],
            subsets: [`latin`],
          },
          {
            family: `Gothic A1`,
            variants: [`400`, `700`],
            subsets: [`korean`],
          },
          // {
          // family: `Noto Sans KR`,
          // variants: [`400`, `700`],
          // subsets: [`korean`],
          // },
          // {
          //   family: `Inconsolata`,
          //   variants: [`400`, `700`],
          // },
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-remark-responsive-iframe`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`,
  ],
}
