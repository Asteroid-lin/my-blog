import { navbar } from "vuepress-theme-hope";

// 高级导航配置示例
export const advancedNavbar = navbar([
  // 主页
  "/",
  
  // 技术文档 - 多级分类
  {
    text: "技术文档",
    icon: "book",
    children: [
      {
        text: "后端技术",
        icon: "server",
        children: [
          {
            text: "Java 生态",
            children: [
              { text: "Spring Boot", link: "/md/articles/spring-boot.md" },
              { text: "MyBatis 源码", link: "/md/articles/mybatis-source.md" },
              { text: "JVM 调优", link: "/md/articles/jvm-tuning.md" }
            ]
          },
          {
            text: "分布式技术",
            children: [
              { text: "微服务架构", link: "/md/articles/microservices.md" },
              { text: "Redis 集群", link: "/md/articles/redis-cluster.md" },
              { text: "消息队列", link: "/md/articles/message-queue.md" }
            ]
          }
        ]
      },
      {
        text: "前端技术",
        icon: "desktop",
        children: [
          { text: "Vue.js", link: "/md/articles/vue.md" },
          { text: "React", link: "/md/articles/react.md" },
          { text: "TypeScript", link: "/md/articles/typescript.md" }
        ]
      }
    ]
  },
  
  // 项目展示 - 按类型分类
  {
    text: "项目展示",
    icon: "folder-open",
    children: [
      {
        text: "企业级项目",
        icon: "building",
        children: [
          { text: "抽奖系统", link: "/md/projects/lottery.md" },
          { text: "电商平台", link: "/md/projects/ecommerce.md" }
        ]
      },
      {
        text: "开源项目",
        icon: "code-branch",
        children: [
          { text: "MyBatis 插件", link: "/md/projects/mybatis-plugin.md" },
          { text: "SpringBoot Starter", link: "/md/projects/spring-boot-starter.md" }
        ]
      }
    ]
  },
  
  // 学习笔记 - 按时间线
  {
    text: "学习笔记",
    icon: "graduation-cap",
    children: [
      {
        text: "2024年",
        children: [
          { text: "Q1 学习计划", link: "/md/notes/2024-q1.md" },
          { text: "Q2 学习计划", link: "/md/notes/2024-q2.md" }
        ]
      },
      {
        text: "2023年",
        children: [
          { text: "年度总结", link: "/md/notes/2023-summary.md" },
          { text: "技术成长", link: "/md/notes/2023-growth.md" }
        ]
      }
    ]
  }
]);

// 移动端优化的简化导航
export const mobileNavbar = navbar([
  "/",
  "/md/resume",
  {
    text: "开发日志",
    icon: "book",
    link: "/md/dev-log/day01.md",
  },
  {
    text: "技术文章",
    icon: "pen-to-square",
    link: "/md/articles/",
  },
  {
    text: "项目展示",
    icon: "folder-open",
    link: "/md/projects/",
  }
]);
