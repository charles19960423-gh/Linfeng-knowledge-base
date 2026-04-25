@echo off
echo ===================================
echo   林峰系统论内容同步脚本
echo ===================================

set SOURCE_DIR=C:\Users\win10\Desktop\林峰系统论V3.1\00林峰系统论
set TARGET_DIR=C:\Users\win10\Desktop\林峰系统论V3.1\个人知识库网页\docs

echo [1/4] 创建目录结构...
call mkdir "%TARGET_DIR%\01-国模块" 2>nul
call mkdir "%TARGET_DIR%\02-族模块" 2>nul
call mkdir "%TARGET_DIR%\03-家模块" 2>nul
call mkdir "%TARGET_DIR%\04-企模块" 2>nul
call mkdir "%TARGET_DIR%\05-人模块" 2>nul

echo [2/4] 复制国模块内容...
xcopy /E /Y "%SOURCE_DIR%\01-国模块总览\*" "%TARGET_DIR%\01-国模块\"

echo [3/4] 复制族模块内容...
xcopy /E /Y "%SOURCE_DIR%\02-族模块总览\*" "%TARGET_DIR%\02-族模块\"

echo [4/4] 复制家模块内容...
xcopy /E /Y "%SOURCE_DIR%\03-家模块总览\*" "%TARGET_DIR%\03-家模块\"

echo [5/4] 复制企模块内容...
xcopy /E /Y "%SOURCE_DIR%\04-企模块总览\*" "%TARGET_DIR%\04-企模块\"

echo [6/4] 复制人模块内容...
xcopy /E /Y "%SOURCE_DIR%\05-人模块总览\*" "%TARGET_DIR%\05-人模块\"

echo ===================================
echo   内容同步完成！
echo ===================================

pause