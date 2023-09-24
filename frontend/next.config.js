/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', '127.0.0.1', 'neuronworks.co.id'],
  },
};

module.exports = nextConfig;
