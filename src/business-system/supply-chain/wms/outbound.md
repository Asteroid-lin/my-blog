# 出库

```mermaid
sequenceDiagram
  OMS->>WMS: 创建出库单
  WMS->>WMS: 生成波次与拣货任务
  WMS->>WMS: 复核、打包、出库
  WMS-->>OMS: 回传发货状态
```
