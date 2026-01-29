/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force Turbopack to treat this folder as the workspace root
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
