/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  env: {
    NEXT_PUBLIC_API_URL: process.env.API_URL || 'http://localhost:5000/api',
  },
};

module.exports = nextConfig;
