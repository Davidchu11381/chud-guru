/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "scholar.googleusercontent.com" },
    ],
  },
};

export default nextConfig;
