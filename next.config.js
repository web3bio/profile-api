/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/profile/ethereum/:address*",
          destination: "/profile/ens/:address*",
        },
        {
          source: "/ns/ethereum/:address*",
          destination: "/ns/ens/:address*",
        },
        {
          source: "/profile/sns/:address*",
          destination: "/profile/solana/:address*",
        },
        {
          source: "/ns/sns/:address*",
          destination: "/ns/solana/:address*",
        },
      ],
      afterFiles: [
        {
          source: "/:path*",
          destination: "/api/:path*",
        },
      ],
    };
  },
  async redirects() {
    return [
      {
        source: "/api",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, X-Api-Key",
          },
        ],
      },
    ];
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
