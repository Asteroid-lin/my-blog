import { navbar } from "vuepress-theme-hope";

// 面向个人技术品牌的主导航，具体文章由各栏目侧边栏承载。
export default navbar([
  "/",
  { text: "关于我", link: "/about/" },
  { text: "架构设计", link: "/architecture/" },
  { text: "业务系统", link: "/business-system/" },
  { text: "技术研究", link: "/tech/" },
  { text: "AI 探索", link: "/ai/" },
  { text: "项目作品", link: "/projects/" },
  { text: "经验沉淀", link: "/troubleshooting/" },
  { text: "成长记录", link: "/growth/" },
]);
