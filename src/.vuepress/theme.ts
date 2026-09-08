import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "小傅哥",
    url: "https://mister-hope.com",
  },

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
    center: ["Search"],
    end: ["Links"],
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

  markdown: {
    mermaid: true,
    align: true,
    attrs: true,
    component: true,

    codeTabs: true,
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

  plugins: {
    // 提供参考页面中位于顶部导航中央的站内搜索。
    slimsearch: true,
    icon: {
      assets: "fontawesome-with-brands",
    },
  },
});
