import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "小傅哥",
    url: "https://mister-hope.com",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.svg",

  docsDir: "src",

  navbar,

  // sidebar
  sidebar,

  // 参考知识库页面采用固定的浅色文档阅读模式。
  darkmode: "disable",

  // 专栏页面由顶部 Navbar、左侧知识库目录和右侧当前页 TOC 组织，
  // 不再在正文顶部重复显示路径面包屑。
  breadcrumb: false,

  // 导航栏配置 - 搜索框在中间，导航链接在右侧
  navbarLayout: {
    start: ["Brand"],
    center: [],   // 导航链接在中间
    end: ["Search", "Links"]      // 搜索框、外观切换、仓库链接在右侧
  },

  // 导航栏图标
  navbarIcon: true,

  // 导航栏自动隐藏
  navbarAutoHide: "mobile",

  // 隐藏主题切换按钮
  themeColor: false,

  // 隐藏全屏按钮
  fullscreen: false,

  footer: "Leo's Tech Lab · 持续记录系统理解与工程实践",

  displayFooter: true,

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    mdEnhance: {
      mermaid: true,
      align: true,
      attrs: true,
      card: true,

      codetabs: true,
      demo: true,

      figure: true,

      imgLazyload: true,
      imgSize: true,
      include: true,

      mark: true,

      playground: {
        presets: ["ts", "vue"],
      },

      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
    },
  },
});
