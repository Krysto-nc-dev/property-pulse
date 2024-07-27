/**
 * @type {import('next').NextConfig}
 * Configuration for Next.js including image domains.
 */
const nextConfig = {
  images: {
    // Allows images from specified external locations to be used in a Next.js project
    remotePatterns: [
      {
        protocol: 'https', // Use 'https' without the colon
        hostname: 'lh3.googleusercontent.com', // Specific hostname for Google user content
        pathname: '**', // Allow all paths under this hostname
      },
    ],
  },
}

export default nextConfig // Export the configuration to be used by Next.js
