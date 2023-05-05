<template>
    <suspense>

        <v-card>
            <v-layout>

                <v-app-bar color="primary" prominent>

                    <div class="mt-2 pa-3" style="cursor: pointer" @click="toggleTheme">
                        <svg v-if="theme.global.current.value.dark" style="width:35px;height:35px"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                        <svg v-else style="width:35px;height:35px" xmlns="http://www.w3.org/2000/svg" fill="#fff"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>


                    </div>

                    <div>
                        <v-menu open-on-hover>
                            <template v-slot:activator="{ props }">
                                <v-btn @click="$i18n.locale = 'en'" color="secondary" v-bind="props">
                                    <img style="cursor:pointer;margin-left: 10px;width:40px;height:32px"
                                        src="english.svg" />
                                </v-btn>
                            </template>
                            <v-card min-width="50" min-height="200">
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-title>
                                            <v-btn style="position: relative;right:15px" @click="$i18n.locale = 'fa'">
                                                <img style="cursor:pointer;width:40px;height:32px" src="iran.svg" />
                                                fa
                                            </v-btn>
                                        </v-list-item-title>

                                    </v-list-item>
                                </v-list>
                            </v-card>

                        </v-menu>
                    </div>


                    <v-spacer></v-spacer>
                    <div dir="auto"> {{ $t('DashboardChart') }}</div>
                    <div> <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                    </div>

                </v-app-bar>
                <div dir="auto">
                    <div>
                        <v-locale-provider>
                            <v-navigation-drawer location="top" color="teal-darken-1" v-model="drawer" temporary>


                                <v-list>


                                    <v-list-item dir="auto" href="/">
                                        {{ $t('ApexCharts') }}
                                    </v-list-item>
                                    <v-list-item dir="auto" href="/googleChart">
                                        {{ $t('GoogleCharts') }}
                                    </v-list-item>
                                    <v-list-item dir="auto" href="/fushionCharts">
                                        {{ $t('fushionCharts') }}
                                    </v-list-item>
                                    <v-list-item dir="auto" href="/jsCharting">
                                        {{ $t('jsCharting') }}
                                    </v-list-item>
                                    <v-list-item dir="auto" href="/vueCharts">
                                        {{ $t('vueChart') }}
                                    </v-list-item>
                                </v-list>


                            </v-navigation-drawer>
                        </v-locale-provider>

                    </div>


                </div>
                <v-main>
                    <slot />
                </v-main>
            </v-layout>

        </v-card>

    </suspense>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useTheme, useLocale } from 'vuetify'
import i18n from '~~/plugins/i18n'

const fav = ref(true)
const menu = ref(false)
const model = ref(true)
const open = ref(['Users'])
const message = ref(false)
const hints = ref(true)
const drawer = ref(false)
const group = ref(null)
const theme = useTheme()
const { t } = useLocale()
const { current } = useLocale()
watch(group, async () => {
    drawer.value = false

})
const changeLocale = locale => current.value = locale

const items = [
    {
        title: 'ApexChart',
        value: 'foo',
        to: '/'
    },
    {
        title: 'GoogleCharts',
        value: 'bar',
        to: '/googleChart'
    },
    {
        title: 'fushionCharts',
        value: 'fushionCharts',
        to: '/fushionCharts'
    },
    {
        title: 'jsCharting',
        value: 'jsCharting',
        to: '/jsCharting'
    },
]
const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'



</script>

<style></style>