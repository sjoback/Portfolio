export default {
    target: 'static',
    // mode: 'spa',
    router: {
        base: '/portfolio/'
    },
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

    loading: { color: '#fff' },

    css: [
        'assets/css/main.scss'
    ],

    plugins: [
        '@/node_modules/@leetajz/vue-directive'
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
            '@/assets/css/vars/_vars.scss',
            '@/assets/css/vars/_colors.scss',
            '@/assets/css/vars/_mixins.scss'
        ]
    },

    build: {}
}
