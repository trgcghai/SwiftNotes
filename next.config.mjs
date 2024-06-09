/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.(com|org|vn|io)",
        port: "",
      },
    ],
  },
};

export default nextConfig;
