import { navbar } from "vuepress-theme-hope";

export default navbar([
  // 主页
  "/",
  
  // 个人简历
  "/md/resume",
  
  // 开发日志 - 下拉菜单
  {
    text: "开发日志",
    icon: "book",
    children: [
      {
        text: "Lottery 项目",
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
      },
      {
        text: "其他项目",
        icon: "code",
        children: [
          { text: "手写MyBatis", link: "/md/projects/mybatis.md" },
          { text: "OpenAI应用", link: "/md/projects/openai.md" }
        ]
      }
    ]
  },

    {
        text: "开发日志",
        icon: "book",
        children: [
            {
                text: "Lottery 项目",
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
            },
            {
                text: "其他项目",
                icon: "code",
                children: [
                    {text: "手写MyBatis", link: "/md/projects/mybatis.md"},
                    {text: "OpenAI应用", link: "/md/projects/openai.md"}
                ]
            }
        ]
    },
  
  // 技术文章
  {
    text: "技术文章",
    icon: "pen-to-square",
    children: [
      {
        text: "Java技术",
        icon: "java",
        children: [
          { text: "Spring Boot", link: "/md/articles/spring-boot.md" },
          { text: "MyBatis源码", link: "/md/articles/mybatis-source.md" },
          { text: "JVM调优", link: "/md/articles/jvm-tuning.md" }
        ]
      },
      {
        text: "分布式技术",
        icon: "network-wired",
        children: [
          { text: "微服务架构", link: "/md/articles/microservices.md" },
          { text: "Redis集群", link: "/md/articles/redis-cluster.md" },
          { text: "消息队列", link: "/md/articles/message-queue.md" }
        ]
      }
    ]
  },
  
  // 项目展示
  {
    text: "项目展示",
    icon: "folder-open",
    children: [
      { text: "抽奖系统", link: "/md/projects/lottery.md" },
      { text: "OpenAI应用", link: "/md/projects/openai-app.md" },
      { text: "SpringBoot Starter", link: "/md/projects/spring-boot-starter.md" }
    ]
  },
  
  // 关于我
  {
    text: "关于我",
    icon: "user",
    children: [
      { text: "个人简介", link: "/md/about/profile.md" },
      { text: "技能栈", link: "/md/about/skills.md" },
      { text: "联系方式", link: "/md/about/contact.md" }
    ]
  },
  
  // 外部链接
  {
    text: "外部链接",
    icon: "external-link-alt",
    children: [
      { text: "GitHub", link: "https://github.com/fuzhengwei", icon: "github" },
      { text: "掘金", link: "https://juejin.cn/user/123456", icon: "pen" },
      { text: "CSDN", link: "https://blog.csdn.net/username", icon: "code" }
    ]
  }
]);
