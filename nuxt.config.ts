// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css',
        '@/assets/setting.scss', '@/assets/iransans.css'
    ],
    plugins: [
        { src: '@/plugins/i18n.ts', ssr: false },

        { src: '@/plugins/apexCharts.client.ts', mode: 'client' }
    ],
    build: {
        transpile: ['vuetify'],

    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },

})
