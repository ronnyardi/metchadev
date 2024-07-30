/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `My Resume`,
    description: `Ronny Ardi's Resume - Professional experience, projects, and certifications.`,
    author: `@ronny_ardi`,
  },
  plugins: [
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `rubik\:400,500,700`,
          `jetbrains mono\:400`,
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-react-helmet`,
  ],
}
