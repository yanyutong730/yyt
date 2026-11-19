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

---

## 记录 3

- 接口路径：`/api/db/test`
- HTTP 方法：POST
- 请求参数：JSON（示例：`{"username":"root","password":"yyt1314521"}`）
- 响应格式（JSON 示例）：

成功：

```json
{
  "code": 0,
  "msg": "数据库连接成功",
  "data": { "host": "localhost", "database": "yyt_zhihu", "user": "root" }
}
```

失败：

```json
{
  "code": 1,
  "msg": "数据库连接失败：Access denied for user 'root'@'localhost' (using password: YES)",
  "data": {}
}
```

- 修改时间：2026-11-19 14:06

---

## 记录 4

- 接口路径：`/api/news`
- HTTP 方法：GET
- 请求参数：无（示例：`GET http://localhost:730/api/news`）
- 响应格式（JSON 示例）：

```json
{
  "code": 0,
  "msg": "获取科技新闻列表成功",
  "data": {
    "total": 8,
    "list": [
      {
        "yyt_id": 1,
        "yyt_title": "国产大模型发布新一代多模态版本，推理成本下降四成",
        "yyt_category": "人工智能",
        "yyt_source": "科技日报",
        "yyt_publish_date": "2026-11-18",
        "yyt_summary": "国内团队发布新一代多模态大模型，在图像理解与长文本处理上均有提升，同时推理成本较上一代下降约四成。",
        "yyt_link": "https://example.com/news/1001"
      }
    ]
  }
}
```

- 修改时间：2026-11-19 14:10
