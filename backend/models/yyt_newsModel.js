/**
 * 姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
 * 科技新闻数据模型
 */
const yytPool = require('../config/yyt_db').yytPool;

async function yytGetAllNews() {
  const yytResult = await yytPool.query(
    'SELECT yyt_id, yyt_title, yyt_category, yyt_source, yyt_publish_date, yyt_summary, yyt_link FROM yyt_tech_news ORDER BY yyt_publish_date DESC, yyt_id DESC'
  );
  return yytResult[0];
}

module.exports = { yytGetAllNews };
