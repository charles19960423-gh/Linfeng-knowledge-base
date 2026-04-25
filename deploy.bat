@echo off
echo ================================
echo   林峰系统论 - 网站部署脚本
echo ================================

cd /d "%~dp0"

echo [1/4] 安装依赖...
call npm install

echo [2/4] 创建索引文件...
call node create-index-files.js

echo [3/4] 构建网站...
call npm run build

echo [4/4] 推送到GitHub...
git add .
git commit -m "更新网站内容"
git push

echo ================================
echo   部署完成！
echo   等待GitHub Pages构建...
echo   访问: https://charles19960423-gh.github.io/Linfeng-knowledge-base/
echo ================================

pause