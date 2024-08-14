/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://hr.talenta.co/api/web/:path*',
            },
        ];
    },
};

export default nextConfig;
