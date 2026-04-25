# 林峰系统论个人知识库网页

基于VitePress构建的个人知识体系网页，涵盖国家、群体、家庭、企业和个人五个维度的完整知识体系。

## 功能特性

- **响应式设计**：适配不同设备屏幕尺寸
- **全文搜索**：快速找到所需内容
- **主题定制**：现代化的界面设计
- **版本控制**：使用Git管理内容变化
- **互动功能**：支持评论系统
- **模块化结构**：清晰的知识体系结构

## 技术栈

- **VitePress**：基于Vue 3的静态网站生成器
- **Vue 3**：前端框架
- **Markdown**：内容编写格式
- **CSS3**：样式定制

## 项目结构

```
个人知识库网页/
├── docs/                    # 文档目录
│   ├── .vitepress/          # VitePress配置
│   │   ├── config.ts        # 主配置文件
│   │   └── theme/           # 主题配置
│   │       ├── style.css    # 样式文件
│   │       ├── index.ts     # 主题入口
│   │       └── components/  # 自定义组件
│   ├── public/              # 静态资源
│   ├── 01-国模块/           # 国模块文档
│   ├── 02-族模块/           # 族模块文档
│   ├── 03-家模块/           # 家模块文档
│   ├── 04-企模块/           # 企模块文档
│   ├── 05-人模块/           # 人模块文档
│   └── README.md            # 首页
├── package.json             # 项目依赖
└── .gitignore               # Git忽略文件
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 `http://localhost:5173` 查看本地预览。

### 构建项目

```bash
npm run build
```

构建产物将生成在 `docs/.vitepress/dist` 目录。

## 部署

### GitHub Pages

1. 构建项目：`npm run build`
2. 将 `docs/.vitepress/dist` 目录内容推送到 `gh-pages` 分支
3. 在GitHub仓库设置中启用GitHub Pages

### Vercel

1. 登录Vercel账号
2. 导入项目仓库
3. 配置构建命令：`npm run build`
4. 配置输出目录：`docs/.vitepress/dist`
5. 部署项目

## 内容管理

### 添加新内容

1. 在对应模块目录下创建Markdown文件
2. 在 `.vitepress/config.ts` 中更新导航和侧边栏配置

### 自定义主题

1. 修改 `.vitepress/theme/style.css` 调整样式
2. 在 `.vitepress/theme/components` 中添加自定义组件

## 贡献指南

1. Fork本仓库
2. 创建功能分支
3. 提交更改
4. 发起Pull Request

## 联系我们

- **邮箱**：contact@linfeng-system.com
- **GitHub**：https://github.com/linfeng-system

---

© 2026 林峰系统论. 保留所有权利.