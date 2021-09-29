const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
        base: '/portfolio/'
    }
} : {}
export default {
    target: 'static',
    // router: { base: '/portfolio/' },
    head: {
        title: 'Joakim Sjöbäck | Designer, Front-end developer & binge watcher',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: [
            { src: 'https://kit.fontawesome.com/086f5d3908.js' }
        ],
    },

    pageTransition: {
        name: 'page',
        mode: 'out-in',
        beforeEnter (el) {
            // Do something
        }
    },

    ...routerBase,

    loading: { color: '#fff' },

    css: [
        'assets/scss/main.scss'
    ],

    plugins: [
        '@/plugins/directive.js'
    ],

    buildModules: [
        '@nuxtjs/style-resources'
    ],

    modules: [
        '@nuxtjs/style-resources',
        ['vue-scrollto/nuxt', { duration: 300 }],
    ],
    styleResources: {
        scss: [
            '@/assets/scss/vars/_vars.scss',
            '@/assets/scss/vars/_colors.scss',
            '@/assets/scss/vars/_mixins.scss'
        ]
    },

    build: {
        extend (config, ctx) {
        }
    }
}
