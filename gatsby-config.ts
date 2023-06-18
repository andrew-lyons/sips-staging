import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Sips Coffee Truck`,
  },
  pathPrefix: "/sips-staging",
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Big Shoulders Display`,
            file: `https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400;500;600;700;800&display=swap`,
          },
          {
            name: `Big Shoulders Text`,
            file: `https://fonts.googleapis.com/css2?family=Big+Shoulders+Text:wght@400;500;600&display=swap`
          },
          {
            name: `Biryani`,
            file: `https://fonts.googleapis.com/css2?family=Biryani&display=swap`,
          },
          {
            resolve: 'gatsby-plugin-manifest',
            options: {
              icon: 'src/assets/images/branding/symbol/Symbol_dk.png',
            },
          },
        ],
      },
    },
  ]
};

export default config;
