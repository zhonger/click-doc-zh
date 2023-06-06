import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh',
  title: "Click 中文文档",
  description: "Simplified Chinese Translation for Python Library `click` Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://click.palletsprojects.com/en/8.1.x/_images/click-logo.png',
    // siteTitle: false,
    outlineTitle: '本页目录',
    lastUpdatedText: '最后更新',
    nav: [
      { text: '首页', link: '/' },
      { text: '开始入门', link: '/docs/' },
      { text: 'API', link: '/api/' },
      {
        text: '其他',
        items: [
          { text: 'Click 文档官网', link: 'https://click.palletsprojects.com/' },
          { text: '关于本站', link: '/other/about' },
          { text: '更新日志', link: '/other/changes' },
          { text: '如何贡献', link: '/other/contribution' },
        ],
      }
    ],
    sidebar: {
      '/docs': [
        {
          text: '简介',
          collapsed: false,
          items: [
            { text: '什么是 Click？', link: '/docs/' },
            { text: '为何选择 Click？', link: '/docs/why' },
            { text: '快速入门', link: '/docs/quickstart' },
            { text: '工具集成', link: '/docs/setuptools' },
          ],
        },
        {
          text: '基础篇',
          collapsed: false,
          items: [
            { text: '形式参数', link: '/docs/parameters' },
            { text: '选项', link: '/docs/options' },
            { text: '实际参数', link: '/docs/arguments' },
            { text: '命令及命令集合', link: '/docs/commands' },
            { text: '用户输入提示', link: '/docs/prompts.md' },
            { text: '记录脚本', link: '/docs/scripts' },
          ]
        },
        {
          text: '进阶篇',
          collapsed: false,
          items: [
            { text: '复杂应用', link: '/docs/applications' },
            { text: '高级模式', link: '/docs/advances' },
            { text: '测试', link: '/docs/testing' },
            { text: '实用工具', link: '/docs/utilities' },
            { text: '自动补全', link: '/docs/completion' },
            { text: '异常处理', link: '/docs/exception' },
            { text: '编码支持', link: '/docs/unicode' },
            { text: 'Windows 终端说明', link: '/docs/windows' },
          ]
        },
        {
          text: '其他',
          collapsed: false,
          items: [
            { text: 'Click-contrib', link: '/docs/click-contrib' },
            { text: '如何升级', link: '/docs/upgrade' },
            { text: '许可协议', link: '/docs/license' },
          ]
        },
      ],
      '/other': [
        {
          text: '本站相关',
          collapsed: false,
          items: [
            { text: '关于本站', link: '/other/about' },
            { text: '更新日志', link: '/other/changes' },
            { text: '如何贡献', link: '/other/contribution' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhonger/click-doc-zh' }
    ],
    editLink: {
      pattern: 'https://github.com/zhonger/click-doc-zh/edit/main/:path',
      text: '在 GitHub 上编辑此页面',
    },
    footer: {
      message: '本文档由 <a href="https://vitepress.dev" target="_blank">Vitepress</a> 强力驱动，遵循 BSD-3-Clause license 协议',
      copyright: '译文版权归 <a href="https://lisz.me" target="_blank">@zhonger</a> 所有'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
  },
  lastUpdated: true,
})
