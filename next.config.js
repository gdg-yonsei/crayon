/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    VERCEL_URL: process.env.VERCEL_URL,
  },
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig;
