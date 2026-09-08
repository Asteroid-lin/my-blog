import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";

export default defineUserConfig({
  dest: "./dev-ops/nginx/html",
  base: "/",

  lang: "zh-CN",
  title: "Leo's Tech Lab",
  description: "个人技术成长档案与供应链架构实践",

  // Mermaid 的 ELK 渲染器是按需加载的大型独立 chunk，适当提高提示阈值。
  bundler: viteBundler({
    viteOptions: {
      build: {
        chunkSizeWarningLimit: 1500,
      },
    },
  }),

  theme,

});
