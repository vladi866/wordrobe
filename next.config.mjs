/** @type {import('next').NextConfig} */
// BASE is "" for your own domain or a <name>.github.io repo,
// and "/repo-name" for a normal GitHub Pages project site.
// The GitHub workflow sets NEXT_PUBLIC_BASE_PATH for you.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  reactStrictMode: true,
  // No server needed: static files + data stored on the device.
  output: "export",
  // GitHub Pages has no clean-URL rewrite, so write /wardrobe/index.html
  trailingSlash: true,
  basePath: BASE,
  assetPrefix: BASE || undefined,
  images: { unoptimized: true },
};
export default nextConfig;
