/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                port: '',
                pathname: '/1200',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8080',
            }
        ]
    },
};

export default nextConfig;
