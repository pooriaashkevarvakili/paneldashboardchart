
<template>
    <client-only>
        <v-app class="pa-md-4">
            <v-row>
                <v-col sm="12" md='12' lg='4' cols="12">
                    <v-card @change="toggleTheme()" style="border-radius: 20px;" min-height="350" class="mt-xs-2">
                        <donut />
                    </v-card>

                </v-col>
                <v-col sm="12" md='12' lg='4' cols="12">
                    <v-card style="border-radius: 20px;" min-height="350" class="mt-xs-2">
                        <SimplePieChartVue />
                    </v-card>
                </v-col>
                <v-col sm="12" md='12' lg='4' xs="12" cols="12">
                    <v-card style="border-radius: 20px;" min-height="290" class="mt-xs-2">
                        <update-donut />
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" lg="4" xs="12" md="12" sm="12">
                    <v-card style="border-radius: 20px;" min-height="290" class="mt-xs-2">
                        <MonochromePie />
                    </v-card>
                </v-col>
                <v-col cols="12" lg="4" xs="12" md="12" sm="12">
                    <v-card style="border-radius: 20px;" min-height="430" class="mt-xs-2">
                        <gradientDonut />
                    </v-card>
                </v-col>
                <v-col cols="12" lg="4" xs="12" md="12" sm="12">
                    <v-card style="border-radius: 20px;" min-height="430" class="mt-xs-2">
                        <donutPattern />
                    </v-card>
                </v-col>
            </v-row>

        </v-app>
    </client-only>
</template>
<script setup>
import donutPattern from "../components/apexCharts/donut,pie/donutPattern.vue"
import gradientDonut from "~~/components/apexCharts/donut,pie/gradientDonut.vue";
import { useTheme } from "vuetify";
import MonochromePie from "../components/apexCharts/donut,pie/MonochromePie.vue";
import donut from "../components/apexCharts/donut,pie/donut.vue"
import SimplePieChartVue from "../components/apexCharts/donut,pie/SimplePieChart.vue";
import UpdateDonut from "../components/apexCharts/donut,pie/UpdateDonut.vue"
const theme = useTheme();
const darkMode = ref(false);

const toggleTheme = () => {
    theme.global.name.value = darkMode.value ? "dark" : "light";
    // Optional: Get value of current theme
    console.log(`Current theme is dark? ${theme.global.current.value.dark}`);
};
</script>

<style >
.custom-class {
    background: rgb(var(--v-theme-something));
    color: rgba(var(--v-theme-on-something), 0.9)
}
</style>