/**
 * 姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
 * 图文列表控制器
 */
const yytGalleryModel = require('../models/yyt_galleryModel');
const yytResponse = require('../middleware/yyt_response');

async function yytGetGallery(yytReq, yytRes) {
  try {
    const yytGalleryList = await yytGalleryModel.yytGetAllGallery();
    console.log('[yyt] 获取图文列表成功，共 ' + yytGalleryList.length + ' 条');
    return yytResponse.yytSuccess(yytRes, {
      total: yytGalleryList.length,
      list: yytGalleryList
    }, '获取图文列表成功');
  } catch (yytError) {
    console.error('[yyt] 获取图文列表失败：' + yytError.message);
    return yytResponse.yytFailure(yytRes, '获取图文列表失败：' + yytError.message, 1);
  }
}

module.exports = { yytGetGallery };
