import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { en, zhHans } from 'vuetify/locale'

// Your own translation file

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
    }
}
export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        rtl: true,

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