/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: 'incremental',
    optimizeCss: false,
  },
};

export default nextConfig;
