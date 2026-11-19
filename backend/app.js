/**
 * 姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
 * 应用入口：Express 服务、跨域配置、静态资源托管
 */
require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const yytHomeRoutes = require('./routes/yyt_homeRoutes');
const yytCheckDb = require('./config/yyt_db').yytCheckDb;

const yytApp = express();
const yytPort = 730;

// 支持所有跨域访问
yytApp.use(cors());
yytApp.use(express.json());
yytApp.use(express.urlencoded({ extended: true }));

// 所有接口统一以 /api/ 为前缀
yytApp.use('/api', yytHomeRoutes);

// 托管前端目录
yytApp.use(express.static(path.join(__dirname, '..', 'frontend')));

yytApp.listen(yytPort, () => {
  console.log('[yyt] 后端服务已启动：http://localhost:' + yytPort);
  yytCheckDb();
});
