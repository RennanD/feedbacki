const isProd = process.env.VERCEL_ENV === "production";

const basePath = "/template";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
    ],
  },

  redirects() {
    return [
      {
        source: "/",
        destination: !isProd
          ? basePath
          : `https://rocketseat.com.br${basePath}`,
        permanent: isProd,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
