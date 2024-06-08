/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  compress: true,
  typescript: {
    ignoreBuildErrors: true
  },
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT,
    INITIAL_PATH_URL: process.env.NEXT_PUBLIC_INITIAL_PATH_URL,
    INITIAL_PATH_URL_API: process.env.NEXT_PUBLIC_INITIAL_PATH_URL_API
  }
};

module.exports = nextConfig;
