/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["ui", "api", "db"],
  experimental: {
    optimizePackageImports: ["ui"]
  }
};

module.exports = nextConfig;
