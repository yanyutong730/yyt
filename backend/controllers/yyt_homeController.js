/**
 * 姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
 * 首页信息控制器
 */
const yytResponse = require('../middleware/yyt_response');

function yytHealth(yytReq, yytRes) {
  return yytResponse.yytSuccess(yytRes, { status: 'ok' }, '服务运行正常');
}

function yytInfo(yytReq, yytRes) {
  return yytResponse.yytSuccess(yytRes, {
    name: '闫雨桐',
    studentId: '24001010730',
    project: '知乎的模仿与制作',
    category: '模仿'
  }, '项目信息获取成功');
}

module.exports = { yytHealth, yytInfo };
