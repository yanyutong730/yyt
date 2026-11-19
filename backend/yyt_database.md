<!--
姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
-->

# yyt_database.md — 数据库变更记录

> 本文件一律追加写入，禁止覆盖已有内容。
> 每次建表、改表或插入数据后，按执行顺序追加对应 SQL 语句（含测试数据 INSERT），
> 要求仅凭本文件即可在新机器上完整重建数据库。

---

## 初始化说明

- 时间：2026-11-19 13:53
- 当前阶段仅完成项目骨架搭建，尚未创建业务表，因此暂无可执行的建表 SQL。
- 后续每次数据库变更将按执行顺序追加 SQL 语句至此文件。

---

## 记录 2

- 时间：2026-11-19 14:00
- 操作：创建项目数据库

```sql
CREATE DATABASE IF NOT EXISTS yyt_zhihu
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
```
