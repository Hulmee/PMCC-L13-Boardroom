import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      name: 'PMCC Boardroom',
      theme_color: '#411e75',
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        icons: [
          {
            src: 'Icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  base: './',
})
