import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: '/codingbox-blog/',
  title: "CodingBox",
  description: "写代码的盒子",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs' },
      { text: 'Blog', link: '/blog' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      // 当访问 /docs/ 路径下的页面时，显示这个侧边栏
      '/docs/': [
        {
          text: '文档指南',
          items: [
            { text: '快速开始', link: '/docs/getting-started' },
            { text: '配置说明', link: '/docs/configuration' }
          ]
        }
      ],
      
      // 当访问 /guide/ 路径下的页面时，显示另一个侧边栏
      '/guide/': [
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
