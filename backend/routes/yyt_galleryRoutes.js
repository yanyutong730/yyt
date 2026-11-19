/**
 * 姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
 * 图文列表路由（挂载于 /api/ 前缀下）
 */
const express = require('express');
const yytGalleryController = require('../controllers/yyt_galleryController');

const yytRouter = express.Router();

yytRouter.get('/gallery', yytGalleryController.yytGetGallery);

module.exports = yytRouter;
