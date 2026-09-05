import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/about/": ["", "skill-stack", "career", "timeline", "contact"],
  "/architecture/": ["", "system-design", "distributed-system", "microservice", "database-design", "architecture-thinking"],
  "/business-system/": ["", { text: "供应链总览", prefix: "supply-chain/", children: ["", "oms/", "wms/", "future/"] }],
  "/tech/": ["", "java/", "springboot/", "mybatis/", "mysql/", "redis/", "mq/", "docker/", "linux/"],
  "/ai/": ["", "ai-coding/", "prompt-engineering/", "ai-architecture/", "enterprise-ai/", "my-ai-tools/"],
  "/projects/": ["", "mini-oms/", "mini-wms/", "ai-knowledge-base/", "tools/", "open-source/", "/md/projects/lottery"],
  "/troubleshooting/": ["", "mysql/", "linux/", "java/", "production/", "performance/", "network/"],
  "/growth/": ["", "roadmap/", "books/", "courses/", "notes/", "career-thinking/"],
});
