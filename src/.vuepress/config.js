const { description } = require('../../package');

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'Iusiel',
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
        [
            'meta',
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
        ],
        [
            'meta',
            {
                property: 'og:site_name',
                content: 'Iusiel',
            },
        ],
        [
            'meta',
            {
                name: 'apple-mobile-web-app-status-bar-style',
                content: '#E3D065',
            },
        ],

        [
            'link',
            {
                rel: 'icon',
                href: '/images/logo.jpg',
            },
        ],
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
        nav: [
            {
                text: 'Guide',
                link: '/guide/',
            },
            {
                text: 'Config',
                link: '/config/',
            },
            {
                text: 'VuePress',
                link: 'https://v1.vuepress.vuejs.org',
            },
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Guide',
                    collapsable: false,
                    children: ['', 'using-vue'],
                },
            ],
        },
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
