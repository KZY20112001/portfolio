/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
        pathname: "/136437/*",
        port: "",
      },
    ],
  },
};

export default nextConfig;
