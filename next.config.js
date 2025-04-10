/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static HTML export
  images: {
    unoptimized: true,  // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/clothing-brand' : '',  // Replace 'clothing-brand' with your repo name
}

module.exports = nextConfig 