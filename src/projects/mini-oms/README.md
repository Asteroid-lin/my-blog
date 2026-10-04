# Mini OMS

一个用于验证订单、库存和履约设计的个人实践项目。

## 当前阶段

当前处于业务梳理与设计准备阶段。本博客仓库维护设计文档，尚未提供可运行的 Mini OMS 后端、建库迁移或真实 WMS/支付联调结果。

## 设计与实现入口

- [OMS 总览](../../business-system/supply-chain/oms/README.md)：业务地图和完整阅读入口。
- [建设范围与实施路线](../../business-system/supply-chain/oms/construction-plan.md)：一期边界及 M0—M5 交付条件。
- [业务场景与单据推演](../../business-system/supply-chain/oms/business-scenarios.md)：一笔订单的拆仓、发货、取消和退货。
- [模块架构与事务边界](../../business-system/supply-chain/oms/technical-architecture.md)：模块化单体、职责和调用链。
- [数据模型与约束](../../business-system/supply-chain/oms/data-design.md)：表关系、唯一键、数量与金额约束。
- [接口与事件契约](../../business-system/supply-chain/oms/api-contracts.md)：命令、回调和幂等草案。
- [测试与上线验收](../../business-system/supply-chain/oms/acceptance.md)：并发、重复和故障恢复验收计划。

## 实践成果记录

后续按“阶段、代码仓库与版本、运行方式、已通过用例、真实联调结果、剩余限制”记录成果。先完成接单与单仓发货，再验证多仓、逆向和恢复；具体是否完成以代码和运行证据为准。
