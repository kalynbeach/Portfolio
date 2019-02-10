// eslint-disable-next-line no-undef
require("dotenv").config();

// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: {
    title: "Kalyn Beach",
    description: "",
    author: "@kalynbeach"
  },
  plugins: [
    "gatsby-plugin-eslint",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // eslint-disable-next-line no-undef
        trackingId: `${process.env.PORTFOLIO_GA_ID}`,
        head: true
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        // eslint-disable-next-line no-undef
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "kalyn-beach-portfolio",
        short_name: "portfolio",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#F92300",
        display: "minimal-ui",
        icon: "src/images/favicon-32x32.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};