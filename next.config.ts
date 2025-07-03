import { ESLint } from "eslint";
import { webpack } from "next/dist/compiled/webpack/webpack";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    turbo:false,
  },
  eslint:{
    ignoreDuringBuilds:true,
  },
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        
      },
    ],
  },
}


 

export default nextConfig; 