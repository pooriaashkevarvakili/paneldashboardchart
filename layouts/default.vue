<template>
    <suspense>

        <v-card>
            <v-layout>

                <v-app-bar color="primary" prominent>

                    <v-btn style="margin-top:-10px" @click="toggleTheme">
                        <v-switch v-model="model" hide-details inset></v-switch>

                    </v-btn>

                    <div class="text-center">
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

                <v-navigation-drawer v-model="drawer" location="right" temporary>
                    <div dir="auto">

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
                    </div>

                </v-navigation-drawer>

                <v-main>
                    <slot />
                </v-main>
            </v-layout>

        </v-card>

    </suspense>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useTheme, } from 'vuetify'
import i18n from '~~/plugins/i18n'
import { useDark, useToggle } from "@vueuse/core"
const fav = ref(true)
const menu = ref(false)
const model = ref(true)
const open = ref(['Users'])
const message = ref(false)
const hints = ref(true)
const drawer = ref(false)
const group = ref(null)
const theme = useTheme()
const admins = [
    ['Management', 'mdi-account-multiple-outline'],
    ['Settings', 'mdi-cog-outline'],
]
const cruds = [
    ['Create', 'mdi-plus-outline'],
    ['Read', 'mdi-file-outline'],
    ['Update', 'mdi-update'],
    ['Delete', 'mdi-delete'],
]
watch(group, async () => {
    drawer.value = false

})
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