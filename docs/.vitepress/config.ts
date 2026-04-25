import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '林峰系统论',
  description: '个人知识体系',
  outDir: '.vitepress/dist',
  base: '/',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '国模块', link: '/01-国模块/' },
      { text: '族模块', link: '/02-族模块/' },
      { text: '家模块', link: '/03-家模块/' },
      { text: '企模块', link: '/04-企模块/' },
      { text: '人模块', link: '/05-人模块/' }
    ],
    sidebar: {
      '/01-国模块/': [
        {
          text: '国模块',
          items: [
            { text: '总览', link: '/01-国模块/' },
            { text: '人', link: '/01-国模块/01-01-人/' },
            { text: '事', link: '/01-国模块/01-02-事/' },
            { text: '物', link: '/01-国模块/01-03-物/' }
          ]
        }
      ],
      '/02-族模块/': [
        {
          text: '族模块',
          items: [
            { text: '总览', link: '/02-族模块/' },
            { text: '士', link: '/02-族模块/02-01-士/' },
            { text: '商', link: '/02-族模块/02-02-商/' },
            { text: '工农', link: '/02-族模块/02-03-工农/' }
          ]
        }
      ],
      '/03-家模块/': [
        {
          text: '家模块',
          items: [
            { text: '总览', link: '/03-家模块/' },
            { text: '缘', link: '/03-家模块/03-01-缘/' },
            { text: '生', link: '/03-家模块/03-02-生/' },
            { text: '欲', link: '/03-家模块/03-03-欲/' }
          ]
        }
      ],
      '/04-企模块/': [
        {
          text: '企模块',
          items: [
            { text: '总览', link: '/04-企模块/' },
            { text: '系统核心', link: '/04-企模块/04-01-系统核心/' },
            { text: '执行落地', link: '/04-企模块/04-02-执行落地/' },
            { text: '数据反馈', link: '/04-企模块/04-03-数据反馈/' },
            { text: '支撑保障', link: '/04-企模块/04-04-支撑保障/' },
            { text: '输出迭代', link: '/04-企模块/04-05-输出迭代/' },
            { text: '日程管控', link: '/04-企模块/04-06-日程管控/' },
            { text: '系统归档', link: '/04-企模块/04-99-系统归档/' }
          ]
        }
      ],
      '/05-人模块/': [
        {
          text: '人模块',
          items: [
            { text: '总览', link: '/05-人模块/' },
            { text: '认知', link: '/05-人模块/05-01-认知/' },
            { text: '情感', link: '/05-人模块/05-02-情感/' },
            { text: '行为', link: '/05-人模块/05-03-行为/' },
            { text: '关系', link: '/05-人模块/05-04-关系/' },
            { text: '成长', link: '/05-人模块/05-05-成长/' },
            { text: '价值', link: '/05-人模块/05-06-价值/' },
            { text: '潜能', link: '/05-人模块/05-07-潜能/' }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    footer: {
      message: '基于 VitePress 构建',
      copyright: '© 2026 林峰系统论'
    }
  }
})