import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";
import sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '@page': '/src/page',
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'উত্তরাধিকার - Cultural Heritage Platform',
        short_name: 'উত্তরাধিকার',
        description: 'উত্তরাধিকার.org একটি অনলাইন প্ল্যাটফর্ম, যেখানে আপনি পরিবার, সমাজ এবং সংস্কৃতির উত্তরাধিকার নিয়ে মূল্যবান তথ্য এবং সংস্থান পাবেন।',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/path-to-the-icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/path-to-the-icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    svgr(),
    sitemap({
      hostname: 'https://uttoradhikar.org',
      dynamicRoutes: ['/aboutus', '/privacy-policy', '/rules'],
    }),
  ],
});
