const { description } = require('../../package')

module.exports = {
    base:"/xiaoyaozi.github.io/",
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    Ref: 'https://v1.vuepress.vuejs.org/config/#title',
    title: '技术博客',
    Ref: 'https://v1.vuepress.vuejs.org/config/#description',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        poot:9527,
        toggleDarkMode: '切换夜间模式',
        nav: [
            {
                text: '前端',
                link: '/frontEnd/',
                items: [
                    { text: 'JavaScript', link: '/frontEnd/JavaScript/other/' },
                    { text: 'Vue', link: '/frontEnd/Vue/' },
                    { text: 'React', link: '/frontEnd/React/' }
                ]
            },
            {
                text: 'Node',
                link: '/Node/'
            },
            {
                text: 'Nginx',
                link: '/Nginx/'
            },
            {
                text: 'Linux',
                link: '/Linux/'
            }
        ],
        sidebar: {
            '/frontEnd/': [
                {
                    title: 'JS方法概论',
                    collapsable: true,
                    children: [
                        {
                            title: "JavaScript",
                            path: '',
                            children: [
                                {
                                    title: "总结",
                                    path: 'JavaScript/Summarize',
                                }, {
                                    title: "其他",
                                    path: 'JavaScript/other',
                                },
                            ]
                        },
                        {
                            title: "Vue",
                            children: [
                                {
                                    title: "面向对象aaa",
                                    path: 'Vue/vue1',
                                }
                            ]
                        },
                        {
                            title: "多岁的5",
                            path: 'using-vue1'
                        },
                    ]
                },
                {
                    title: 'JS函数',
                    collapsable: true,
                    children: [
                        {
                            title: "Vue111",
                            path: '',
                            children: [
                                {
                                    title: "面向对象111",
                                    path: 'JavaScript/using-vue1',
                                },
                                {
                                    title: "for11",
                                    path: 'JavaScript/using-vue2',
                                }
                            ]
                        },
                        {
                            title: "多岁的",
                            path: 'using-vue'
                        },
                        {
                            title: "多岁的5",
                            path: 'using-vue1'
                        },
                    ]
                }
            ],
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}
