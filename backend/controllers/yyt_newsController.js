/**
 * 姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
 * 科技新闻控制器
 */
const yytNewsModel = require('../models/yyt_newsModel');
const yytResponse = require('../middleware/yyt_response');

async function yytGetNews(yytReq, yytRes) {
  try {
    const yytNewsList = await yytNewsModel.yytGetAllNews();
    console.log('[yyt] 获取科技新闻列表成功，共 ' + yytNewsList.length + ' 条');
    return yytResponse.yytSuccess(yytRes, {
      total: yytNewsList.length,
      list: yytNewsList
    }, '获取科技新闻列表成功');
  } catch (yytError) {
    console.error('[yyt] 获取科技新闻列表失败：' + yytError.message);
    return yytResponse.yytFailure(yytRes, '获取科技新闻列表失败：' + yytError.message, 1);
  }
}

module.exports = { yytGetNews };
