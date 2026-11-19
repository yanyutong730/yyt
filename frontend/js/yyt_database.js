/*
 * 姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
 * 数据库连接测试页面逻辑
 */
(function () {
  const yytForm = document.getElementById('yytDbForm');
  const yytButton = document.getElementById('yytConnectBtn');
  const yytResult = document.getElementById('yytResult');

  function yytShowResult(yytMessage, yytIsSuccess) {
    yytResult.textContent = yytMessage;
    yytResult.className = yytIsSuccess
      ? 'yyt-result yyt-result-success'
      : 'yyt-result yyt-result-error';
  }

  yytForm.addEventListener('submit', function (yytEvent) {
    yytEvent.preventDefault();

    const yytUsername = document.getElementById('yytUsername').value.trim();
    const yytPassword = document.getElementById('yytPassword').value;

    if (!yytUsername || !yytPassword) {
      yytShowResult('请输入用户名和密码', false);
      return;
    }

    yytButton.disabled = true;
    yytButton.textContent = '连接中...';
    yytShowResult('正在连接数据库，请稍候...', true);

    fetch('/api/db/test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: yytUsername, password: yytPassword })
    })
      .then(function (yytResponse) {
        return yytResponse.json();
      })
      .then(function (yytData) {
        console.log('[yyt] 服务器返回的数据：', yytData);
        if (yytData.code === 0) {
          yytShowResult('连接成功：' + yytData.msg, true);
        } else {
          yytShowResult('连接失败：' + yytData.msg, false);
          console.error('[yyt] 数据库连接失败：', yytData.msg);
        }
      })
      .catch(function (yytError) {
        console.error('[yyt] 请求数据库测试接口失败：', yytError);
        yytShowResult('请求失败：' + yytError.message, false);
      })
      .finally(function () {
        yytButton.disabled = false;
        yytButton.textContent = '连接数据库';
      });
  });
})();
