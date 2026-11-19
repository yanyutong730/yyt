/**
 * 姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
 * 数据库连接池配置（凭据从 .env 读取）
 */
const mysql = require('mysql2/promise');

const yytPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function yytCheckDb() {
  try {
    await yytPool.query('SELECT 1');
    console.log('[yyt] MySQL 数据库连接成功');
  } catch (yytError) {
    console.error('[yyt] MySQL 数据库连接失败：' + yytError.message);
  }
}

module.exports = { yytPool, yytCheckDb };
