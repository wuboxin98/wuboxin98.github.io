import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 忽略构建时无法验证的链接（如 localhost、开发环境 URL）
  ignoreDeadLinks: true,
  // base: '/codingbox-blog/',
  title: "Boxin",
  description: "写代码的盒子",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Agent', link: '/agent' },
      { text: '生活', link: '/life' }
    ],

    sidebar: {
      // 当访问 /agent/ 路径下的页面时，显示这个侧边栏
      '/agent/': [
        {
          text: '文档指南',
          items: [
            { text: '快速开始', link: '/agent/getting-started' },
            { text: '配置说明', link: '/agent/configuration' }
          ]
        }
      ],
      
      // 当访问 /guide/ 路径下的页面时，显示另一个侧边栏
      '/life/': [
        {
          text: '使用教程',
          items: [
            { text: '基础教程', link: '/guide/basic' },
            { text: '高级教程', link: '/guide/advanced' }
          ]
        }
      ],
      
      // 当访问其他路径时，显示默认侧边栏
      '/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'API Examples', link: '/api-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nightcovers' }
    ]
  }
})
