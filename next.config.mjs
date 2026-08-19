/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Permite despliegue estático ultra-rápido en Cloudflare Pages
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;