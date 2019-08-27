module.exports = {
    siteMetadata: {
        title: `Leo`,
        description: `Learn a new language by learning`,
        author: `Adam Upchurch`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`,
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
                theme_color: `#FF54AC`,
                display: `minimal-ui`,
                icon: `${__dirname}/static/images/LeoLogo.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['PT Serif'],
                },
                custom: {
                    families: ['Inter'],
                    urls: ['/fonts/fonts.css']
                }
            }
        },
        `gatsby-plugin-google-analytics`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: "G-BHF8FE1T4X",
              // Defines where to place the tracking script - `true` in the head and `false` in the body
              head: false,
              // Setting this parameter is optional
              anonymize: true,
              // Setting this parameter is also optional
              respectDNT: true,
              // Avoids sending pageview hits from custom paths
              exclude: ["/preview/**", "/do-not-track/me/too/"],
              // Delays sending pageview hits on route update (in milliseconds)
              pageTransitionDelay: 0,
              // Enables Google Optimize using your container Id
              optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
              // Enables Google Optimize Experiment ID
              experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
              // Set Variation ID. 0 for original 1,2,3....
              variationId: "0",
              // Any additional optional fields
              sampleRate: 5,
              siteSpeedSampleRate: 10,
              cookieDomain: "readleo.com",
            },
          },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
