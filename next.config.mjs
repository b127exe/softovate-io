/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: '/softovate-io.github.io',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
          },
        },
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
  // webpack(config, { isServer }) {
  //   if (!isServer) {
  //     config.output.publicPath = './';
  //   }

  //   const fileLoaderRule = config.module.rules.find((rule) =>
  //     rule.test?.test?.(".svg")
  //   );

  //   config.module.rules.push(
  //     {
  //       ...fileLoaderRule,
  //       test: /\.svg$/i,
  //       resourceQuery: /url/,
  //     },
  //     {
  //       test: /\.svg$/i,
  //       issuer: fileLoaderRule.issuer,
  //       resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
  //       use: {
  //         loader: "@svgr/webpack",
  //         options: {
  //           svgoConfig: {
  //             plugins: [
  //               {
  //                 name: "preset-default",
  //                 params: {
  //                   overrides: {
  //                     removeViewBox: false,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //       },
  //     }
  //   );

  //   fileLoaderRule.exclude = /\.svg$/i;

  //   return config;
  // },
};

export default nextConfig;