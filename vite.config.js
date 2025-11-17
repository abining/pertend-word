import { defineConfig } from "vite";

import path from "path";

import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    base: './', // 使用相对路径
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [
      vue(),
    
    ],
    server: {
      host: "0.0.0.0",
      port: 5174,
      proxy: {
        // "/large-model-web": {
        //   target: "http://20.20.136.229:8082",
        //   changeOrigin: true,
        //   // 如果需要路径重写
        //   rewrite: (path) => path.replace(/^\/large-model-web/, '') 
        // },
        // "/sggj-file": {
        //   target: "http://20.20.136.229:8083",
        //   changeOrigin: true
        // },
        "/ai-api": {
          // target: 'http://192.168.10.254:8101',
          // target: "http://20.20.136.26:8101",
          target:"http://20.20.136.24:8101",
          changeOrigin: true
        },
        "/api": {
          target: process.env.VITE_APP_BASE_API,
          changeOrigin: true
        },
        "/file-api": {
          target: process.env.VITE_APP_FILE_API,
          changeOrigin: true
        }
      }
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          // 确保生成的静态资源路径正确
          assetFileNames: `assets/[name]-[hash][extname]`,
          chunkFileNames: `assets/[name]-[hash].js`,
          entryFileNames: `assets/[name]-[hash].js`
        }
      }
    }
  }
})