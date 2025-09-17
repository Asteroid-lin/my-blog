import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  dest: "./dev-ops/nginx/html",
  base: "/",

  lang: "zh-CN",
  title: "我的简历",
  description: "关于我自己的学习成长经历",

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

    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: 'Search',
                },
                '/zh/': {
                    placeholder: '搜索',
                },
            },
        }),
    ],

  theme,

});
