@echo off
REM 姓名：闫雨桐 | 学号：24001010730 | 时间：2026-11-19 | 大模型：Tencent Hunyuan Hy
chcp 65001 >nul
title yyt-zhihu-backend
cd /d "%~dp0backend"

if not exist "node_modules" (
  echo [yyt] Installing dependencies...
  npm install --registry=https://registry.npmmirror.com --no-audit --no-fund
)

echo [yyt] Starting backend: http://localhost:730/
node app.js

if errorlevel 1 (
  echo [yyt] Backend exited with an error.
)
pause
