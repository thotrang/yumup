/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: ["res.cloudinary.com", "https://res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};
export default nextConfig;
