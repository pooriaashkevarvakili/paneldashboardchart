import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'

import { createI18n, useI18n } from 'vue-i18n'

// Your own translation file
const messages = {
    en: {
        $vuetify: {
            dataIterator: {
                rowsPerPageText: 'Items per page:',
                pageText: '{0}-{1} of {2}',
            },
        },
    },
    fa: {
        $vuetify: {
            dataIterator: {
                rowsPerPageText: 'Element per sida:',
                pageText: '{0}-{1} av {2}',
            },
        },
    },
}
const i18n = new createI18n({
    legacy: false, // Vuetify does not support the legacy mode of vue-i18n
    locale: 'fa',
    fallbackLocale: 'en',
    messages,
})
const myCustomLightTheme = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#6200EE',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        something: '#00ff00',






    }
}
export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        rtl: true,
        locale: {
            adapter: createVueI18nAdapter({ i18n, useI18n })
        },
        components,
        directives,
        theme: {
            defaultTheme: 'myCustomLightTheme',
            themes: {
                myCustomLightTheme,
            }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})