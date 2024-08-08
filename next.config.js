// next.config.js
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    config.resolve.fallback = { fs: false };

    // Enable source maps in development mode
    if (dev && !isServer) {
      config.devtool = "source-map";
    }

    return config;
  },
};

module.exports = nextConfig;
