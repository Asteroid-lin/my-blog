import { navbar } from "vuepress-theme-hope";

// 响应式导航配置
export const responsiveNavbar = navbar([
  // 主页 - 始终显示
  "/",
  
  // 个人简历 - 始终显示
  "/md/resume",
  
  // 开发日志 - 桌面端显示完整，移动端显示简化
  {
    text: "开发日志",
    icon: "book",
    // 桌面端显示下拉菜单
    children: [
      {
        text: "Lottery 项目日志",
        icon: "laptop-code",
        prefix: "/md/dev-log/",
        children: [
          "day01.md",
          "day02.md",
          "day03.md",
          "day04.md",
          "day05.md",
          "day06.md",
          "day07~day08.md",
          "day09~day10.md",
          "day11.md",
          "day12.md"
        ]
      }
    ],
    // 移动端直接链接到第一个日志
    link: "/md/dev-log/day01.md"
  },
  
  // 技术文章 - 根据屏幕大小显示不同内容
  {
    text: "技术文章",
    icon: "pen-to-square",
    children: [
      // 桌面端显示完整分类
      {
        text: "Java 技术栈",
        icon: "java",
        children: [
          { text: "Spring Boot", link: "/md/articles/spring-boot.md" },
          { text: "MyBatis 源码", link: "/md/articles/mybatis-source.md" },
          { text: "JVM 调优", link: "/md/articles/jvm-tuning.md" }
        ]
      },
      {
        text: "分布式技术",
        icon: "network-wired",
        children: [
          { text: "微服务架构", link: "/md/articles/microservices.md" },
          { text: "Redis 集群", link: "/md/articles/redis-cluster.md" },
          { text: "消息队列", link: "/md/articles/message-queue.md" }
        ]
      },
      // 移动端显示热门文章
      { text: "热门文章", icon: "fire", children: [
        { text: "Spring Boot 最佳实践", link: "/md/articles/spring-boot-best-practices.md" },
        { text: "Redis 性能优化", link: "/md/articles/redis-optimization.md" }
      ]}
    ]
  },
  
  // 项目展示 - 简化显示
  {
    text: "项目展示",
    icon: "folder-open",
    children: [
      { text: "抽奖系统", link: "/md/projects/lottery.md" },
      { text: "OpenAI 应用", link: "/md/projects/openai-app.md" },
      { text: "SpringBoot Starter", link: "/md/projects/spring-boot-starter.md" }
    ]
  },
  
  // 关于我 - 移动端隐藏，桌面端显示
  {
    text: "关于我",
    icon: "user",
    children: [
      { text: "个人简介", link: "/md/about/profile.md" },
      { text: "技能栈", link: "/md/about/skills.md" },
      { text: "联系方式", link: "/md/about/contact.md" }
    ]
  }
]);
