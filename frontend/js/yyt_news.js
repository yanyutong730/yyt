/*
 * 姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
 * 科技新闻列表页面逻辑：读取 /api/news 并渲染到页面
 */
(function () {
  const yytApiLink = document.getElementById('yytApiLink');
  const yytApiStatus = document.getElementById('yytApiStatus');
  const yytNewsList = document.getElementById('yytNewsList');
  const yytNewsCount = document.getElementById('yytNewsCount');
  const yytNewsMessage = document.getElementById('yytNewsMessage');

  yytApiLink.href = '/api/news';
  yytApiLink.textContent = window.location.origin + '/api/news';

  function yytShowMessage(yytText, yytIsSuccess) {
    yytNewsMessage.textContent = yytText;
    yytNewsMessage.className = yytIsSuccess
      ? 'yyt-result yyt-result-success'
      : 'yyt-result yyt-result-error';
  }

  function yytFormatDate(yytValue) {
    if (!yytValue) return '';
    const yytDate = new Date(yytValue);
    if (isNaN(yytDate.getTime())) return String(yytValue);
    const yytYear = yytDate.getUTCFullYear();
    const yytMonth = String(yytDate.getUTCMonth() + 1).padStart(2, '0');
    const yytDay = String(yytDate.getUTCDate()).padStart(2, '0');
    return yytYear + '-' + yytMonth + '-' + yytDay;
  }

  function yytEscape(yytText) {
    return String(yytText == null ? '' : yytText)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function yytRenderNews(yytList) {
    yytNewsList.innerHTML = '';
    for (let yytIndex = 0; yytIndex < yytList.length; yytIndex++) {
      const yytItem = yytList[yytIndex];
      const yytCard = document.createElement('article');
      yytCard.className = 'yyt-news-card';
      yytCard.innerHTML =
        '<div class="yyt-news-top">' +
          '<span class="yyt-news-category">' + yytEscape(yytItem.yyt_category) + '</span>' +
          '<time class="yyt-news-date">' + yytEscape(yytFormatDate(yytItem.yyt_publish_date)) + '</time>' +
        '</div>' +
        '<h3 class="yyt-news-title">' + yytEscape(yytItem.yyt_title) + '</h3>' +
        '<p class="yyt-news-summary">' + yytEscape(yytItem.yyt_summary) + '</p>' +
        '<div class="yyt-news-bottom">' +
          '<span class="yyt-news-source">来源：' + yytEscape(yytItem.yyt_source) + '</span>' +
          '<a class="yyt-news-link" href="' + yytEscape(yytItem.yyt_link) + '" target="_blank" rel="noopener">查看原文 →</a>' +
        '</div>';
      yytNewsList.appendChild(yytCard);
    }
  }

  fetch('/api/news')
    .then(function (yytResponse) {
      return yytResponse.json();
    })
    .then(function (yytData) {
      console.log('[yyt] 服务器返回的数据：', yytData);
      if (yytData.code === 0) {
        yytApiStatus.textContent = '请求成功';
        yytApiStatus.className = 'yyt-api-status yyt-api-ok';
        yytNewsCount.textContent = '共 ' + yytData.data.total + ' 条';
        yytRenderNews(yytData.data.list);
        yytShowMessage('数据加载成功，共 ' + yytData.data.total + ' 条新闻。', true);
      } else {
        yytApiStatus.textContent = '请求失败';
        yytApiStatus.className = 'yyt-api-status yyt-api-fail';
        yytNewsCount.textContent = '0 条';
        yytShowMessage('加载失败：' + yytData.msg, false);
        console.error('[yyt] 加载新闻失败：', yytData.msg);
      }
    })
    .catch(function (yytError) {
      yytApiStatus.textContent = '请求失败';
      yytApiStatus.className = 'yyt-api-status yyt-api-fail';
      yytNewsCount.textContent = '0 条';
      yytShowMessage('请求失败：' + yytError.message, false);
      console.error('[yyt] 请求新闻接口失败：', yytError);
    });
})();
