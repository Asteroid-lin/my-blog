<template><div><h1 id="mybatis-源码深度解析" tabindex="-1"><a class="header-anchor" href="#mybatis-源码深度解析" aria-hidden="true">#</a> MyBatis 源码深度解析</h1>
<h2 id="核心组件" tabindex="-1"><a class="header-anchor" href="#核心组件" aria-hidden="true">#</a> 核心组件</h2>
<h3 id="_1-sqlsessionfactory" tabindex="-1"><a class="header-anchor" href="#_1-sqlsessionfactory" aria-hidden="true">#</a> 1. SqlSessionFactory</h3>
<ul>
<li>会话工厂，负责创建 SqlSession</li>
<li>基于配置构建会话工厂</li>
<li>单例模式管理</li>
</ul>
<h3 id="_2-sqlsession" tabindex="-1"><a class="header-anchor" href="#_2-sqlsession" aria-hidden="true">#</a> 2. SqlSession</h3>
<ul>
<li>数据库会话，执行 SQL 操作</li>
<li>线程不安全，需要及时关闭</li>
<li>提供 CRUD 操作方法</li>
</ul>
<h3 id="_3-mapper-接口" tabindex="-1"><a class="header-anchor" href="#_3-mapper-接口" aria-hidden="true">#</a> 3. Mapper 接口</h3>
<ul>
<li>通过动态代理实现</li>
<li>方法名与 SQL 语句映射</li>
<li>参数绑定和结果映射</li>
</ul>
<h2 id="执行流程" tabindex="-1"><a class="header-anchor" href="#执行流程" aria-hidden="true">#</a> 执行流程</h2>
<ol>
<li>
<p><strong>配置解析</strong></p>
<ul>
<li>XML 配置文件解析</li>
<li>Mapper 接口扫描</li>
<li>类型别名注册</li>
</ul>
</li>
<li>
<p><strong>SQL 执行</strong></p>
<ul>
<li>参数预处理</li>
<li>SQL 语句执行</li>
<li>结果集映射</li>
</ul>
</li>
<li>
<p><strong>缓存机制</strong></p>
<ul>
<li>一级缓存（会话级）</li>
<li>二级缓存（应用级）</li>
<li>缓存策略配置</li>
</ul>
</li>
</ol>
<h2 id="插件机制" tabindex="-1"><a class="header-anchor" href="#插件机制" aria-hidden="true">#</a> 插件机制</h2>
<p>MyBatis 提供了强大的插件机制，可以在 SQL 执行过程中进行拦截和增强：</p>
<ul>
<li><strong>Interceptor 接口</strong></li>
<li><strong>@Intercepts 注解</strong></li>
<li><strong>@Signature 注解</strong></li>
</ul>
<h2 id="实际应用" tabindex="-1"><a class="header-anchor" href="#实际应用" aria-hidden="true">#</a> 实际应用</h2>
<p>通过插件机制可以实现：</p>
<ul>
<li>SQL 性能监控</li>
<li>分页查询</li>
<li>数据权限控制</li>
<li>审计日志记录</li>
</ul>
</div></template>


