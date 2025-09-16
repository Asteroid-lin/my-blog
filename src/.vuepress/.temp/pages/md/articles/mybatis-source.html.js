export const data = JSON.parse("{\"key\":\"v-1a221d9e\",\"path\":\"/md/articles/mybatis-source.html\",\"title\":\"MyBatis 源码深度解析\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"MyBatis 源码深度解析\",\"icon\":\"database\",\"category\":[\"Java技术\",\"源码学习\"],\"description\":\"核心组件 1. SqlSessionFactory\\r会话工厂，负责创建 SqlSession; \\r基于配置构建会话工厂; \\r单例模式管理; 2. SqlSession\\r数据库会话，执行 SQL 操作; \\r线程不安全，需要及时关闭; \\r提供 CRUD 操作方法; 3. Mapper 接口\\r通过动态代理实现; \\r方法名与 SQL 语句映射; \\r参数绑定和结...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/md/articles/mybatis-source.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"我的简历\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"MyBatis 源码深度解析\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"核心组件 1. SqlSessionFactory\\r会话工厂，负责创建 SqlSession; \\r基于配置构建会话工厂; \\r单例模式管理; 2. SqlSession\\r数据库会话，执行 SQL 操作; \\r线程不安全，需要及时关闭; \\r提供 CRUD 操作方法; 3. Mapper 接口\\r通过动态代理实现; \\r方法名与 SQL 语句映射; \\r参数绑定和结...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"小傅哥\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"MyBatis 源码深度解析\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"小傅哥\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"核心组件\",\"slug\":\"核心组件\",\"link\":\"#核心组件\",\"children\":[{\"level\":3,\"title\":\"1. SqlSessionFactory\",\"slug\":\"_1-sqlsessionfactory\",\"link\":\"#_1-sqlsessionfactory\",\"children\":[]},{\"level\":3,\"title\":\"2. SqlSession\",\"slug\":\"_2-sqlsession\",\"link\":\"#_2-sqlsession\",\"children\":[]},{\"level\":3,\"title\":\"3. Mapper 接口\",\"slug\":\"_3-mapper-接口\",\"link\":\"#_3-mapper-接口\",\"children\":[]}]},{\"level\":2,\"title\":\"执行流程\",\"slug\":\"执行流程\",\"link\":\"#执行流程\",\"children\":[]},{\"level\":2,\"title\":\"插件机制\",\"slug\":\"插件机制\",\"link\":\"#插件机制\",\"children\":[]},{\"level\":2,\"title\":\"实际应用\",\"slug\":\"实际应用\",\"link\":\"#实际应用\",\"children\":[]}],\"readingTime\":{\"minutes\":0.87,\"words\":262},\"filePathRelative\":\"md/articles/mybatis-source.md\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
