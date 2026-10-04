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
        { text: "基础认知", collapsible: false, children: ["", "business-coverage", "design-thinking", "domain-model", "business-scenarios"] },
        {
          text: "主数据与基础资料",
          collapsible: false,
          children: ["master-data", "product-center", "bundle-gift", "customer-channel", "business-mode", "b2b-credit"],
        },
        {
          text: "订单领域",
          collapsible: false,
          children: ["order-center", "order-intake", "order-audit", "payment", "pricing"],
        },
        {
          text: "库存领域",
          collapsible: false,
          children: ["inventory-center", "channel-inventory", "shortage-presale", "replenishment-transfer", "traceability"],
        },
        {
          text: "履约领域",
          collapsible: false,
          children: [
            { text: "履约中心", link: "/business-system/supply-chain/oms/fulfillment" },
            "delivery-promise",
            { text: "寻仓与库存分配", link: "/business-system/supply-chain/oms/fulfillment#寻仓与库存分配" },
            { text: "拆单与合单", link: "/business-system/supply-chain/oms/fulfillment#拆单与合单" },
            { text: "快递匹配与供应商直发", link: "/business-system/supply-chain/oms/fulfillment#快递匹配与供应商直发" },
            { text: "OMS 与 WMS 的边界", link: "/business-system/supply-chain/oms/fulfillment#oms-与-wms-的边界" },
            { text: "改单与拦截", link: "/business-system/supply-chain/oms/order-change" },
            { text: "包裹、运单与回传", link: "/business-system/supply-chain/oms/package-logistics" },
            "node-fulfillment",
            "logistics-exception",
          ],
        },
        { text: "售后领域", collapsible: false, children: ["after-sales", "exchange-reship", "repair-intake"] },
        { text: "财务与结算", collapsible: false, children: ["finance-settlement", "settlement-reconciliation"] },
        { text: "系统集成", collapsible: false, children: ["integration"] },
        { text: "异常与补偿", collapsible: false, children: ["exception"] },
        {
          text: "系统建设与开发设计",
          collapsible: false,
          children: ["construction-plan", "technical-architecture", "data-design", "api-contracts", "consistency-recovery", "operations", "acceptance"],
        },
        { text: "学习与输出", collapsible: false, children: ["learning-roadmap"] },
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
  "/ai/": ["", "knowledge-base/", "ai-coding/", "prompt-engineering/", "ai-architecture/", "enterprise-ai/", "my-ai-tools/"],
  "/ai/knowledge-base/": [
    {
      text: "AI 知识库",
      collapsible: false,
      children: [
        { text: "总览与阅读路线", link: "/ai/knowledge-base/" },
        {
          text: "文档上传入库",
          prefix: "document-ingestion/",
          collapsible: true,
          children: [
            { text: "场景总览", link: "/ai/knowledge-base/document-ingestion/" },
            "upload-validation",
            "parsing",
            "chunking",
            "indexing",
          ],
        },
        {
          text: "外部知识源同步",
          prefix: "source-sync/",
          collapsible: true,
          children: [
            { text: "场景总览", link: "/ai/knowledge-base/source-sync/" },
            "source-config",
            "change-detection",
            "sync-tasks",
            "result-reconciliation",
          ],
        },
        {
          text: "知识检索问答",
          prefix: "qa/",
          collapsible: true,
          children: [
            { text: "场景总览", link: "/ai/knowledge-base/qa/" },
            "query-scope",
            "retrieval",
            "reranking",
            "answer-citations",
          ],
        },
        {
          text: "多租户与权限隔离",
          prefix: "access-control/",
          collapsible: true,
          children: [
            { text: "场景总览", link: "/ai/knowledge-base/access-control/" },
            "tenant-identity",
            "dataset-authorization",
            "document-permissions",
            "audit-revocation",
          ],
        },
        {
          text: "知识更新与下线",
          prefix: "knowledge-maintenance/",
          collapsible: true,
          children: [
            { text: "场景总览", link: "/ai/knowledge-base/knowledge-maintenance/" },
            "content-versioning",
            "metadata-updates",
            "disable-delete",
            "failure-recovery",
          ],
        },
        {
          text: "质量评估与运营",
          prefix: "quality-operations/",
          collapsible: true,
          children: [
            { text: "场景总览", link: "/ai/knowledge-base/quality-operations/" },
            "evaluation-dataset",
            "retrieval-evaluation",
            "answer-evaluation",
            "monitoring-cost",
          ],
        },
      ],
    },
  ],
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

  // 未单独配置的旧页面保持无侧边栏，避免回退匹配产生缺失配置警告。
  "/": false,
});
