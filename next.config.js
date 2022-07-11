require("dotenv").config()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["openweathermap.org", "lh3.googleusercontent.com", "placehold.co"]
  }
}

module.exports = nextConfig
