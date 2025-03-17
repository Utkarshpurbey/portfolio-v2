/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['@react-dom/server'],
      },
      images: {
				remotePatterns: [
					{
					  protocol: 'https',
					  hostname: '**', 
					  port: '',
					  pathname: '/**',
					},
				]
			},
};

export default nextConfig;
