/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Lark-Studio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Lark-Studio/' : '',
  trailingSlash: true,
}

module.exports = nextConfig 