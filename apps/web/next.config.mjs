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
};

export default (nextConfig);
