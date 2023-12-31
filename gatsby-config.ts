import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Cond Soluções`,
    siteUrl: `https://condsolucoes.com.br/`,
  },
  pathPrefix: "/cond-solucoes",
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  // plugins: ["gatsby-plugin-google-gtag", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
  //   resolve: 'gatsby-source-filesystem',
  //   options: {
  //     "name": "images",
  //     "path": "./src/images/"
  //   },
  //   __key: "images"
  // }]
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-breakpoints",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

export default config;
