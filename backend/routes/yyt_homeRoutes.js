/**
 * 姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
 * 首页相关路由（挂载于 /api/ 前缀下）
 */
const express = require('express');
const yytHomeController = require('../controllers/yyt_homeController');

const yytRouter = express.Router();

yytRouter.get('/health', yytHomeController.yytHealth);
yytRouter.get('/info', yytHomeController.yytInfo);

module.exports = yytRouter;
