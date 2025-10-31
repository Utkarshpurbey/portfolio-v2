/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoBasePath = '/portfolio-v2';

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@react-dom/server"],
  },
  basePath: isProd ? repoBasePath : undefined,
  assetPrefix: isProd ? repoBasePath + '/' : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
