module.exports = {
  siteMetadata: {
    title: `Good night sweet heart`,
    heroTitle: `Praticidade na hora de dormir`,
    description: `Good night sweetheart é um site experimental que contém histórias e contos infantis para facilitar a hora de dormir da criançada.`,
    author: `@marcos-paiva`,
    siteUrl: `http://localhost:8000`,
  },
  pathPrefix: `/gnsh`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
              linkImagesToOriginal: false,
              withWebp: true,
              disableBgImage: true,
            },
          },
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              active: true,
              class: `inline-emoji`,
              escapeCharacter: `#`,
              size: 16
            }
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Good night sweet heart`,
        short_name: `GNSH`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
            require(`postcss-preset-env`)({ stage: 2 }),
            require(`precss`)(),
            require(`postcss-normalize`)(),
            require('autoprefixer')(),
          ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tales`,
        path: `${__dirname}/src/tales`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
