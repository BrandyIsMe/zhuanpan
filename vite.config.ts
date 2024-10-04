import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import { fileURLToPath, URL } from "node:url";
import postCssPxToRem from 'postcss-pxtorem'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
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
