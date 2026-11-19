/*
 * 姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
 * Canvas 背景粒子动画 + 后端接口数据输出
 */
(function () {
  const yytCanvas = document.getElementById('yytCanvas');
  const yytCtx = yytCanvas.getContext('2d');
  let yytParticles = [];
  let yytWidth = 0;
  let yytHeight = 0;

  function yytResize() {
    yytWidth = window.innerWidth;
    yytHeight = window.innerHeight;
    yytCanvas.width = yytWidth;
    yytCanvas.height = yytHeight;
    yytCreateParticles();
  }

  function yytCreateParticles() {
    const yytCount = Math.min(90, Math.floor(yytWidth * yytHeight / 16000));
    yytParticles = [];
    for (let yytIndex = 0; yytIndex < yytCount; yytIndex++) {
      yytParticles.push({
        x: Math.random() * yytWidth,
        y: Math.random() * yytHeight,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.8
      });
    }
  }

  function yytMoveParticles() {
    for (let yytIndex = 0; yytIndex < yytParticles.length; yytIndex++) {
      const yytItem = yytParticles[yytIndex];
      yytItem.x += yytItem.vx;
      yytItem.y += yytItem.vy;
      if (yytItem.x < 0 || yytItem.x > yytWidth) yytItem.vx *= -1;
      if (yytItem.y < 0 || yytItem.y > yytHeight) yytItem.vy *= -1;
    }
  }

  function yytDrawLines() {
    for (let yytI = 0; yytI < yytParticles.length; yytI++) {
      for (let yytJ = yytI + 1; yytJ < yytParticles.length; yytJ++) {
        const yytA = yytParticles[yytI];
        const yytB = yytParticles[yytJ];
        const yytDx = yytA.x - yytB.x;
        const yytDy = yytA.y - yytB.y;
        const yytDistance = Math.sqrt(yytDx * yytDx + yytDy * yytDy);
        if (yytDistance < 130) {
          yytCtx.strokeStyle = 'rgba(37, 99, 235, ' + (0.16 * (1 - yytDistance / 130)) + ')';
          yytCtx.lineWidth = 1;
          yytCtx.beginPath();
          yytCtx.moveTo(yytA.x, yytA.y);
          yytCtx.lineTo(yytB.x, yytB.y);
          yytCtx.stroke();
        }
      }
    }
  }

  function yytDraw() {
    yytCtx.clearRect(0, 0, yytWidth, yytHeight);
    yytMoveParticles();
    yytDrawLines();
    for (let yytIndex = 0; yytIndex < yytParticles.length; yytIndex++) {
      const yytItem = yytParticles[yytIndex];
      yytCtx.fillStyle = 'rgba(37, 99, 235, 0.45)';
      yytCtx.beginPath();
      yytCtx.arc(yytItem.x, yytItem.y, yytItem.r, 0, Math.PI * 2);
      yytCtx.fill();
    }
    requestAnimationFrame(yytDraw);
  }

  function yytFetchInfo() {
    fetch('/api/info')
      .then(function (yytResponse) {
        return yytResponse.json();
      })
      .then(function (yytResult) {
        console.log('[yyt] 服务器返回的数据：', yytResult);
      })
      .catch(function (yytError) {
        console.error('[yyt] 获取项目信息失败：', yytError);
      });
  }

  window.addEventListener('resize', yytResize);
  yytResize();
  yytDraw();
  yytFetchInfo();
})();
