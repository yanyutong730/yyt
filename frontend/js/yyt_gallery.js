/*
 * 姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
 * 图文列表页面逻辑：读取 /api/gallery 并渲染图片与文字
 */
(function () {
  const yytApiLink = document.getElementById('yytApiLink');
  const yytApiStatus = document.getElementById('yytApiStatus');
  const yytGalleryList = document.getElementById('yytGalleryList');
  const yytGalleryCount = document.getElementById('yytGalleryCount');
  const yytGalleryMessage = document.getElementById('yytGalleryMessage');

  yytApiLink.href = '/api/gallery';
  yytApiLink.textContent = window.location.origin + '/api/gallery';

  function yytShowMessage(yytText, yytIsSuccess) {
    yytGalleryMessage.textContent = yytText;
    yytGalleryMessage.className = yytIsSuccess
      ? 'yyt-result yyt-result-success'
      : 'yyt-result yyt-result-error';
  }

  function yytFormatDate(yytValue) {
    if (!yytValue) return '';
    const yytDate = new Date(yytValue);
    if (isNaN(yytDate.getTime())) return String(yytValue);
    return yytDate.getUTCFullYear() + '-' +
      String(yytDate.getUTCMonth() + 1).padStart(2, '0') + '-' +
      String(yytDate.getUTCDate()).padStart(2, '0');
  }

  function yytEscape(yytText) {
    return String(yytText == null ? '' : yytText)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function yytRenderGallery(yytList) {
    yytGalleryList.innerHTML = '';
    for (let yytIndex = 0; yytIndex < yytList.length; yytIndex++) {
      const yytItem = yytList[yytIndex];
      const yytCard = document.createElement('article');
      yytCard.className = 'yyt-gallery-card';
      yytCard.innerHTML =
        '<div class="yyt-gallery-image-wrap">' +
          '<img class="yyt-gallery-image" src="' + yytEscape(yytItem.yyt_image) + '" alt="' + yytEscape(yytItem.yyt_title) + '">' +
          '<span class="yyt-gallery-category">' + yytEscape(yytItem.yyt_category) + '</span>' +
        '</div>' +
        '<div class="yyt-gallery-body">' +
          '<h3 class="yyt-gallery-title">' + yytEscape(yytItem.yyt_title) + '</h3>' +
          '<p class="yyt-gallery-desc">' + yytEscape(yytItem.yyt_description) + '</p>' +
          '<div class="yyt-gallery-meta">' +
            '<span>来源：' + yytEscape(yytItem.yyt_source) + '</span>' +
            '<time>' + yytEscape(yytFormatDate(yytItem.yyt_publish_date)) + '</time>' +
          '</div>' +
        '</div>';
      yytGalleryList.appendChild(yytCard);
    }
  }

  fetch('/api/gallery')
    .then(function (yytResponse) {
      return yytResponse.json();
    })
    .then(function (yytData) {
      console.log('[yyt] 服务器返回的数据：', yytData);
      if (yytData.code === 0) {
        yytApiStatus.textContent = '请求成功';
        yytApiStatus.className = 'yyt-api-status yyt-api-ok';
        yytGalleryCount.textContent = '共 ' + yytData.data.total + ' 条';
        yytRenderGallery(yytData.data.list);
        yytShowMessage('数据加载成功，共 ' + yytData.data.total + ' 条图文。', true);
      } else {
        yytApiStatus.textContent = '请求失败';
        yytApiStatus.className = 'yyt-api-status yyt-api-fail';
        yytGalleryCount.textContent = '0 条';
        yytShowMessage('加载失败：' + yytData.msg, false);
        console.error('[yyt] 加载图文列表失败：', yytData.msg);
      }
    })
    .catch(function (yytError) {
      yytApiStatus.textContent = '请求失败';
      yytApiStatus.className = 'yyt-api-status yyt-api-fail';
      yytGalleryCount.textContent = '0 条';
      yytShowMessage('请求失败：' + yytError.message, false);
      console.error('[yyt] 请求图文接口失败：', yytError);
    });
})();
