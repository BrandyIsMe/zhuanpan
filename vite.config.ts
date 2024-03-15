import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import postCssPxToRem from 'postcss-pxtorem'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server:{
    proxy:{
      '/api':'https://api.imooc.zcwytd.com'
    },
    cors:true
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    postcss:{
      plugins:[
        postCssPxToRem({
          rootValue:37.5,
          propList:['*'],
          exclude: /node_node_modules/i
        })
      ]
    },
    preprocessorOptions:{
      less:{
        javascriptEnabled: true,
        additionalData: `@import "${path.resolve(__dirname, 'src/assets/css/theme.less')}";`
      }
    }
  }
});
