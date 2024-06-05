/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.(com|org|vn)",
        port: "",
      },
    ],
  },
};

export default nextConfig;
