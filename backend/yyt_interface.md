<!--
姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
-->

# yyt_interface.md — 接口变更记录

> 本文件一律追加写入，禁止覆盖已有内容。

---

## 记录 1

- 接口路径：`/api/health`
- HTTP 方法：GET
- 请求参数：无（示例：`GET http://localhost:730/api/health`）
- 响应格式（JSON 示例）：

```json
{
  "code": 0,
  "msg": "服务运行正常",
  "data": { "status": "ok" }
}
```

- 修改时间：2026-11-19 13:53

---

## 记录 2

- 接口路径：`/api/info`
- HTTP 方法：GET
- 请求参数：无（示例：`GET http://localhost:730/api/info`）
- 响应格式（JSON 示例）：

```json
{
  "code": 0,
  "msg": "项目信息获取成功",
  "data": {
    "name": "闫雨桐",
    "studentId": "24001010730",
    "project": "知乎的模仿与制作",
    "category": "模仿"
  }
}
```

- 修改时间：2026-11-19 13:53
