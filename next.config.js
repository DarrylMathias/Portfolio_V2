/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: 'incremental',
    optimizeCss: false,
    turbo: false,
  },
};

export default nextConfig;
