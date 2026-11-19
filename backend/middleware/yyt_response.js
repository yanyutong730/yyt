/**
 * 姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
 * 统一 JSON 响应工具
 */
function yytSuccess(yytRes, yytData, yytMsg) {
  return yytRes.json({
    code: 0,
    msg: yytMsg || '操作成功',
    data: yytData === undefined ? {} : yytData
  });
}

function yytFailure(yytRes, yytMsg, yytCode, yytData) {
  return yytRes.json({
    code: yytCode || 1,
    msg: yytMsg || '操作失败',
    data: yytData === undefined ? {} : yytData
  });
}

module.exports = { yytSuccess, yytFailure };
