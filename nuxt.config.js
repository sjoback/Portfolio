export default {
    target: 'static',
    head: {
        title: 'Joakim Sjöbäck',
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
    ],

    plugins: [
        '@/plugins/globalComponents',
        '@/node_modules/@swegaming-ab/vue-directive'
    ],

    buildModules: [
    ],

    modules: [
        '@nuxtjs/style-resources'
    ],
    styleResources: {
        scss: [
            'assets/scss/main.scss'
        ]
    },

    build: {
        extend (config, ctx) {
        }
    }
}
