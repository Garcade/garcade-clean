/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['yourdomain.com'], // Optional, or remove if not using remote images
  },
}

module.exports = nextConfig
