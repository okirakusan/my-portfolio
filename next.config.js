/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASIC_AUTH_USER: process.env.BASIC_AUTH_USER,
    BASIC_AUTH_PASSWORD: process.env.BASIC_AUTH_PASSWORD,
    organization: process.env.NEXT_PUBLIC_OPENAI_ORG,
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  },
  images: {
    domains: ["cdn2.thecatapi.com"],
  },
};

module.exports = nextConfig;
