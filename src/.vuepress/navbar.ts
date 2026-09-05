import { navbar } from "vuepress-theme-hope";

// 面向个人技术品牌的主导航，具体文章由各栏目侧边栏承载。
export default navbar([
  "/",
  { text: "关于我", link: "/about/" },
  {
    text: "架构设计",
    link: "/architecture/",
    children: [
      { text: "系统设计", link: "/architecture/system-design/" },
      { text: "分布式系统", link: "/architecture/distributed-system/" },
      { text: "微服务", link: "/architecture/microservice/" },
      { text: "数据库设计", link: "/architecture/database-design/" },
    ],
  },
  {
    text: "业务系统实践",
    link: "/business-system/",
    children: [
      { text: "供应链系统总览", link: "/business-system/supply-chain/" },
      { text: "OMS 订单管理系统", link: "/business-system/supply-chain/oms/" },
      { text: "WMS 仓储管理系统", link: "/business-system/supply-chain/wms/" },
      { text: "后续扩展（TMS / ERP）", link: "/business-system/supply-chain/future/" },
    ],
  },
  {
    text: "技术研究",
    link: "/tech/",
    children: [
      { text: "Java", link: "/tech/java/" },
      { text: "Spring Boot", link: "/tech/springboot/" },
      { text: "MySQL", link: "/tech/mysql/" },
      { text: "Redis", link: "/tech/redis/" },
      { text: "消息队列", link: "/tech/mq/" },
    ],
  },
  {
    text: "AI 探索",
    link: "/ai/",
    children: [
      { text: "AI Coding", link: "/ai/ai-coding/" },
      { text: "Prompt 工程", link: "/ai/prompt-engineering/" },
      { text: "企业 AI", link: "/ai/enterprise-ai/" },
    ],
  },
  {
    text: "项目作品",
    link: "/projects/",
    children: [
      { text: "Mini OMS", link: "/projects/mini-oms/" },
      { text: "Mini WMS", link: "/projects/mini-wms/" },
      { text: "AI 知识库", link: "/projects/ai-knowledge-base/" },
      { text: "Lottery 抽奖系统", link: "/projects/lottery/" },
      { text: "开源项目", link: "/projects/open-source/" },
    ],
  },
  { text: "经验沉淀", link: "/troubleshooting/" },
  { text: "成长记录", link: "/growth/" },
]);
