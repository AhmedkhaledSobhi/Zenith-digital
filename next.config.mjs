/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disables image optimization for static export
  },
  output: 'export',
  trailingSlash: true, // Add trailing slash for static routes
}

export default nextConfig;
