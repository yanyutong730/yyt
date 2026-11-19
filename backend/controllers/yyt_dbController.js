/**
 * 姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
 * 数据库连接测试控制器：使用前端传入的用户名、密码测试 MySQL 连接
 */
const mysql = require('mysql2/promise');
const yytResponse = require('../middleware/yyt_response');

async function yytTestConnection(yytReq, yytRes) {
  const yytUsername = yytReq.body.username;
  const yytPassword = yytReq.body.password;

  if (!yytUsername || !yytPassword) {
    console.error('[yyt] 数据库连接测试失败：用户名或密码为空');
    return yytResponse.yytFailure(yytRes, '用户名和密码不能为空', 1);
  }

  let yytConnection = null;
  try {
    yytConnection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: yytUsername,
      password: yytPassword,
      database: process.env.DB_NAME
    });
    await yytConnection.query('SELECT 1');
    console.log('[yyt] 数据库连接成功，用户：' + yytUsername);
    return yytResponse.yytSuccess(yytRes, {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: yytUsername
    }, '数据库连接成功');
  } catch (yytError) {
    console.error('[yyt] 数据库连接失败：' + yytError.message);
    return yytResponse.yytFailure(yytRes, '数据库连接失败：' + yytError.message, 1);
  } finally {
    if (yytConnection) {
      await yytConnection.end();
    }
  }
}

module.exports = { yytTestConnection };
