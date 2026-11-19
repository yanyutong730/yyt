/**
 * 姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
 * 科技新闻路由（挂载于 /api/ 前缀下）
 */
const express = require('express');
const yytNewsController = require('../controllers/yyt_newsController');

const yytRouter = express.Router();

yytRouter.get('/news', yytNewsController.yytGetNews);

module.exports = yytRouter;
