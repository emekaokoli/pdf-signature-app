import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  server:
    process.env.NODE_ENV === 'development'
      ? {
          port: 3000,
          proxy: {
            '/api': {
              target: 'https://dev-api.gettonote.com/',
              changeOrigin: true,
              secure: false,
            },
          },
        }
      : {},
});
