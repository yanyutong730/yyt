<!--
姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
-->

# 知乎的模仿与制作

- 学号：24001010730
- 姓名：闫雨桐
- 项目类别：模仿

## 项目简介

以知乎为蓝本进行界面与功能模仿的全栈练习项目。前端使用原生 HTML、CSS、JavaScript；后端使用 Node.js + Express，提供 RESTful 接口；数据库使用 MySQL。

## 技术栈

- 前端：HTML / CSS / JavaScript（无第三方库、框架与 CDN）
- 后端：Node.js + Express（端口 730，接口前缀 `/api/`）
- 数据库：MySQL（连接参数存放于 `backend/.env`）

## 目录结构

```
frontend/   前端页面与静态资源（css/ js/ fonts/ images/）
backend/    后端服务（config/ controllers/ models/ routes/ middleware/）
AGENTS.md   项目开发约定
yyt_prompt.md  AI 开发指令记录
```

## 运行方式

```bash
cd backend
npm install
node app.js
```

浏览器访问 http://localhost:730/

## 统一响应格式

```json
{ "code": 0, "msg": "提示信息", "data": {} }
```
