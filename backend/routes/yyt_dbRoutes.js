/**
 * 姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
 * 数据库连接测试路由（挂载于 /api/ 前缀下）
 */
const express = require('express');
const yytDbController = require('../controllers/yyt_dbController');

const yytRouter = express.Router();

yytRouter.post('/db/test', yytDbController.yytTestConnection);

module.exports = yytRouter;
