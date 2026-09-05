import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/about/": ["", "skill-stack", "career", "timeline", "contact"],
  "/architecture/": ["", "system-design", "distributed-system", "microservice", "database-design", "architecture-thinking"],

  // 进入业务系统后，Sidebar 始终展示完整的供应链知识库目录。
  "/business-system/": [
    {
      text: "业务系统实践",
      collapsible: false,
      children: [
        { text: "供应链系统总览", link: "/business-system/supply-chain/" },
        { text: "OMS 订单管理系统", link: "/business-system/supply-chain/oms/" },
        { text: "WMS 仓储管理系统", link: "/business-system/supply-chain/wms/" },
        { text: "后续扩展（TMS / ERP）", link: "/business-system/supply-chain/future/" },
      ],
    },
  ],
  "/business-system/supply-chain/": [
    {
      text: "供应链系统架构",
      collapsible: false,
      children: [
        { text: "供应链系统总览", link: "/business-system/supply-chain/" },
        { text: "OMS 订单管理系统", link: "/business-system/supply-chain/oms/" },
        { text: "WMS 仓储管理系统", link: "/business-system/supply-chain/wms/" },
        { text: "后续扩展（TMS / ERP）", link: "/business-system/supply-chain/future/" },
      ],
    },
  ],
  "/business-system/supply-chain/oms/": [
    {
      text: "OMS 订单管理系统",
      collapsible: false,
      children: [
        { text: "基础设计", collapsible: false, children: ["", "design-thinking"] },
        { text: "订单领域", collapsible: false, children: ["order-center"] },
        { text: "库存领域", collapsible: false, children: ["inventory-center"] },
        { text: "履约领域", collapsible: false, children: ["fulfillment"] },
        { text: "异常与补偿", collapsible: false, children: ["exception"] },
      ],
    },
  ],
  "/business-system/supply-chain/wms/": [
    {
      text: "WMS 仓储管理系统",
      collapsible: false,
      children: [
        { text: "基础设计", collapsible: false, children: ["", "design-thinking"] },
        { text: "入库作业", collapsible: false, children: ["inbound"] },
        { text: "出库作业", collapsible: false, children: ["outbound"] },
        { text: "库存作业", collapsible: false, children: ["inventory"] },
        { text: "仓储规则", collapsible: false, children: ["warehouse-rule"] },
      ],
    },
  ],
  "/business-system/supply-chain/future/": [
    {
      text: "供应链系统架构",
      collapsible: false,
      children: [
        { text: "供应链系统总览", link: "/business-system/supply-chain/" },
        { text: "OMS 订单管理系统", link: "/business-system/supply-chain/oms/" },
        { text: "WMS 仓储管理系统", link: "/business-system/supply-chain/wms/" },
        { text: "后续扩展（TMS / ERP）", link: "/business-system/supply-chain/future/" },
      ],
    },
  ],

  "/tech/": ["", "java/", "springboot/", "mybatis/", "mysql/", "redis/", "mq/", "docker/", "linux/"],
  "/ai/": ["", "ai-coding/", "prompt-engineering/", "ai-architecture/", "enterprise-ai/", "my-ai-tools/"],
  "/projects/": ["", "mini-oms/", "mini-wms/", "ai-knowledge-base/", "lottery/", "tools/", "open-source/"],
  "/projects/lottery/": [
    {
      text: "Lottery 抽奖系统",
      collapsible: false,
      children: [
        { text: "项目概述", link: "/projects/lottery/#项目概述" },
        {
          text: "技术架构",
          collapsible: false,
          children: [
            { text: "核心技术栈", link: "/projects/lottery/#核心技术栈" },
            { text: "系统架构", link: "/projects/lottery/#系统架构" },
          ],
        },
        {
          text: "核心功能",
          collapsible: false,
          children: [
            { text: "抽奖引擎", link: "/projects/lottery/#_1-抽奖引擎" },
            { text: "活动管理", link: "/projects/lottery/#_2-活动管理" },
            { text: "奖品发放", link: "/projects/lottery/#_3-奖品发放" },
          ],
        },
        {
          text: "性能优化",
          collapsible: false,
          children: [
            { text: "缓存策略", link: "/projects/lottery/#_1-缓存策略" },
            { text: "数据库优化", link: "/projects/lottery/#_2-数据库优化" },
            { text: "并发控制", link: "/projects/lottery/#_3-并发控制" },
          ],
        },
        { text: "项目亮点", link: "/projects/lottery/#项目亮点" },
      ],
    },
  ],
  // 兼容旧版 Lottery 作品页：让它也拥有“专栏目录 + 正文 + 右侧 TOC”布局。
  "/md/projects/lottery.html": [
    {
      text: "Lottery 抽奖系统",
      collapsible: false,
      children: [
        { text: "项目概述", link: "/md/projects/lottery.html#项目概述" },
        {
          text: "技术架构",
          collapsible: false,
          children: [
            { text: "核心技术栈", link: "/md/projects/lottery.html#核心技术栈" },
            { text: "系统架构", link: "/md/projects/lottery.html#系统架构" },
          ],
        },
        {
          text: "核心功能",
          collapsible: false,
          children: [
            { text: "抽奖引擎", link: "/md/projects/lottery.html#1-抽奖引擎" },
            { text: "活动管理", link: "/md/projects/lottery.html#2-活动管理" },
            { text: "奖品发放", link: "/md/projects/lottery.html#3-奖品发放" },
          ],
        },
        {
          text: "性能优化",
          collapsible: false,
          children: [
            { text: "缓存策略", link: "/md/projects/lottery.html#缓存策略" },
            { text: "数据库优化", link: "/md/projects/lottery.html#数据库优化" },
            { text: "并发控制", link: "/md/projects/lottery.html#并发控制" },
          ],
        },
        { text: "项目亮点", link: "/md/projects/lottery.html#项目亮点" },
      ],
    },
  ],
  "/troubleshooting/": ["", "mysql/", "linux/", "java/", "production/", "performance/", "network/"],
  "/growth/": ["", "roadmap/", "books/", "courses/", "notes/", "career-thinking/"],
});
