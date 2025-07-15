/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "",
    reactStrictMode: true,
    output: 'standalone',
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    images: {
        unoptimized: true,
        domains: ['placeholderjs.com'],
    },
    async rewrites() {
        return [
            // Serve docs from the static build in public directory
            {
                source: '/docs',
                destination: '/docs/index.html',
            },
            {
                source: '/docs/:path*',
                destination: '/docs/:path*',
            },
        ];
    },
    async redirects() {
        return [
            // Handle direct placeholder access in docs
            {
                source: '/docs/:placeholder(\\d+x\\d+.*)',
                destination: '/:placeholder',
                permanent: false,
            },
        ];
    },
};

export default (nextConfig);
