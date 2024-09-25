const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com"],
  },
  reactStrictMode: true,
  i18n,
};

module.exports = nextConfig;
