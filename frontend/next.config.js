/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: { domains: ['instagram.com'] }
};
module.exports = nextConfig;
