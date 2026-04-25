$sourceDir = "C:\Users\win10\Desktop\林峰系统论V3.1\00林峰系统论"
$targetDir = "C:\Users\win10\Desktop\林峰系统论V3.1\个人知识库网页\docs"

Write-Host "==================================="
Write-Host "  林峰系统论内容同步脚本"
Write-Host "==================================="

Write-Host "[1/5] 复制国模块内容..."
Copy-Item -Path "$sourceDir\01-国模块总览\*" -Destination "$targetDir\01-国模块\" -Recurse -Force

Write-Host "[2/5] 复制族模块内容..."
Copy-Item -Path "$sourceDir\02-族模块总览\*" -Destination "$targetDir\02-族模块\" -Recurse -Force

Write-Host "[3/5] 复制家模块内容..."
Copy-Item -Path "$sourceDir\03-家模块总览\*" -Destination "$targetDir\03-家模块\" -Recurse -Force

Write-Host "[4/5] 复制企模块内容..."
Copy-Item -Path "$sourceDir\04-企模块总览\*" -Destination "$targetDir\04-企模块\" -Recurse -Force

Write-Host "[5/5] 复制人模块内容..."
Copy-Item -Path "$sourceDir\05-人模块总览\*" -Destination "$targetDir\05-人模块\" -Recurse -Force

Write-Host "==================================="
Write-Host "  内容同步完成！"
Write-Host "==================================="