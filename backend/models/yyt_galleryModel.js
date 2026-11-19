/**
 * 姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
 * 图文列表数据模型
 */
const yytPool = require('../config/yyt_db').yytPool;

async function yytGetAllGallery() {
  const yytResult = await yytPool.query(
    'SELECT yyt_id, yyt_title, yyt_category, yyt_image, yyt_description, yyt_source, yyt_publish_date FROM yyt_image_gallery ORDER BY yyt_publish_date DESC, yyt_id DESC'
  );
  return yytResult[0];
}

module.exports = { yytGetAllGallery };
