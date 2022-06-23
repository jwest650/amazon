/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["pngimg.com", "fakestoreapi.com", "img.freepik.com"],
    },
    env: {
        stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    },
};

module.exports = nextConfig;
