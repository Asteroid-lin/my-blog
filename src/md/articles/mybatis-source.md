---
title: MyBatis 源码深度解析
icon: database
category:
  - Java技术
  - 源码学习
---

# MyBatis 源码深度解析

## 核心组件

### 1. SqlSessionFactory
- 会话工厂，负责创建 SqlSession
- 基于配置构建会话工厂
- 单例模式管理

### 2. SqlSession
- 数据库会话，执行 SQL 操作
- 线程不安全，需要及时关闭
- 提供 CRUD 操作方法

### 3. Mapper 接口
- 通过动态代理实现
- 方法名与 SQL 语句映射
- 参数绑定和结果映射

## 执行流程

1. **配置解析**
   - XML 配置文件解析
   - Mapper 接口扫描
   - 类型别名注册

2. **SQL 执行**
   - 参数预处理
   - SQL 语句执行
   - 结果集映射

3. **缓存机制**
   - 一级缓存（会话级）
   - 二级缓存（应用级）
   - 缓存策略配置

## 插件机制

MyBatis 提供了强大的插件机制，可以在 SQL 执行过程中进行拦截和增强：

- **Interceptor 接口**
- **@Intercepts 注解**
- **@Signature 注解**

## 实际应用

通过插件机制可以实现：
- SQL 性能监控
- 分页查询
- 数据权限控制
- 审计日志记录
