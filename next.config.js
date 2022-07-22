/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  basePath: '/litepaper',

  eslint: {
    dirs: ['src'],
  },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
