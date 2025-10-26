/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://darrylmathias.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "monthly",
  priority: 0.7,
  sitemapSize: 5000,
};

export default config;