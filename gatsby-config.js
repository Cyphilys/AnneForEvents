module.exports = {
  siteMetadata: {
    title: `AnneForEvents`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Mickaël Kerkhove`,
    pdg: `Anne Dérozier`,
    bio: `AnneForEvents est une agence à taille humaine, née de la volonté de sa créatrice de mettre
          au service de nos clients 20 ans d’expérience en organisation d'événements.`,
    pdgImage: `https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimage-uniservice.copainsdavant.com%2Fimage%2F450%2F5%2F1534398814%2F9455350.jpg&f=1`,
    image: "./images/logo-afe.svg"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-less",
      options: {
        modifyVars: require("./src/theme/antd.js"),
        // Needed to load antdesign less files.
        javascriptEnabled: true,
      },
    },
    {
      resolve: "gatsby-plugin-antd",
      options: {
        // Activate less files
        style: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-afe.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
