import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";

export default defineUserConfig({
  dest: "./dev-ops/nginx/html",
  base: "/",

  lang: "zh-CN",
  title: "Leo's Tech Lab",
  description: "个人技术成长档案与供应链架构实践",

  // 通过 Vite 配置抑制 Sass 警告
  bundler: viteBundler({
    viteOptions: {
      css: {
        preprocessorOptions: {
          scss: {
            silenceDeprecations: ["legacy-js-api", "color-functions"],
          },
        },
      },
    },
  }),

  theme,

});
