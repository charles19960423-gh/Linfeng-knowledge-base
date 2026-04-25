#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// 遍历目录，为每个模块创建index.md文件
function createIndexFiles(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // 检查是否有README.md文件
      const readmePath = path.join(filePath, 'README.md');
      if (fs.existsSync(readmePath)) {
        // 读取README.md内容
        const content = fs.readFileSync(readmePath, 'utf8');
        // 创建index.md文件
        const indexPath = path.join(filePath, 'index.md');
        fs.writeFileSync(indexPath, content);
        console.log(`Created ${indexPath}`);
      }
      
      // 递归处理子目录
      createIndexFiles(filePath);
    }
  });
}

// 开始处理docs目录
const docsDir = path.join(process.cwd(), 'docs');
createIndexFiles(docsDir);

console.log('All index.md files created successfully!');