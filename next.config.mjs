/** @type {import('next').NextConfig} */
const nextConfig = {
  // devIndicators: false, // This disables the bottom-left icon
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
