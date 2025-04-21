/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Lark-Studio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/Lark-Studio' : '',
  trailingSlash: true,
}

export default nextConfig
