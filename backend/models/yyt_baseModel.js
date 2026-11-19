/**
 * 姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
 * 模型基础模块：统一持有数据库连接池，供后续业务模型复用
 */
const yytPool = require('../config/yyt_db').yytPool;

module.exports = { yytPool };
